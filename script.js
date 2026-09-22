// URL Model Teachable Machine
const MODEL_URL = "https://teachablemachine.withgoogle.com/models/HreYwvltN/";

// Variabel global
let model, webcam, maxPredictions;
let isPredicting = false;

// Elemen DOM
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const statusText = document.getElementById('status-text');
const webcamWrapper = document.getElementById('webcam-wrapper');
const resultContainer = document.getElementById('result-container');
const resultLabel = document.getElementById('result-label');
const confidenceText = document.getElementById('confidence-text');
const confidenceFill = document.getElementById('confidence-fill');
const recommendationBox = document.getElementById('recommendation-box');
const cameraSelect = document.getElementById('camera-select');

// Event Listeners
startBtn.onclick = initCameraAndModel;
stopBtn.onclick = stopCamera;
cameraSelect.onchange = async () => {
    if (isPredicting) {
        stopCamera();
        await initCameraAndModel();
    }
};

// Deteksi kamera
async function getCameras() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        
        if (videoDevices.length > 0) {
            cameraSelect.innerHTML = '';
            videoDevices.forEach((device, index) => {
                const option = document.createElement('option');
                option.value = device.deviceId;
                option.text = device.label || `OPTICAL_SENSOR_${index + 1}`;
                cameraSelect.appendChild(option);
            });
            cameraSelect.style.display = 'block';
        }
    } catch (e) {
        console.error("Gagal mendapatkan daftar kamera", e);
    }
}
getCameras();

// Memuat model Teachable Machine
async function loadModel() {
    try {
        const modelURL = MODEL_URL + "model.json";
        const metadataURL = MODEL_URL + "metadata.json";
        statusText.innerText = "SYS_INIT_AI...";
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        statusText.innerText = "AI_MODULE_ONLINE";
        return true;
    } catch (error) {
        console.error("Gagal muat model:", error);
        statusText.innerText = "ERR: AI_LOAD_FAILED";
        statusText.style.color = "var(--error)";
        return false;
    }
}

// Mengaktifkan kamera
async function initCameraAndModel() {
    startBtn.style.display = "none";
    
    if (!model) {
        const loaded = await loadModel();
        if (!loaded) {
            startBtn.style.display = "block";
            return;
        }
    }

    try {
        statusText.innerText = "ACCESS_OPTICAL_SENSOR...";
        const flip = true; 
        webcam = new tmImage.Webcam(400, 400, flip);
        
        const selectedDeviceId = cameraSelect.value;
        const options = selectedDeviceId ? { deviceId: { exact: selectedDeviceId } } : undefined;
        await webcam.setup(options);
        await webcam.play();
        
        webcamWrapper.innerHTML = '';
        webcamWrapper.appendChild(webcam.canvas);
        
        isPredicting = true;
        stopBtn.style.display = "block";
        resultContainer.style.display = "flex"; // Karena pakai flexbox di desktop
        statusText.innerText = "SYS_ACTIVE. ANALYZING_DATA...";
        
        window.requestAnimationFrame(loop);
    } catch (error) {
        console.error("Gagal akses kamera:", error);
        statusText.innerText = "ERR: CAMERA_ACCESS_DENIED";
        statusText.style.color = "var(--error)";
        startBtn.style.display = "block";
    }
}

// Loop prediksi
async function loop() {
    if (isPredicting) {
        webcam.update();
        await predict();
        window.requestAnimationFrame(loop);
    }
}

// Menjalankan prediksi
async function predict() {
    const prediction = await model.predict(webcam.canvas);
    let highest = null;
    
    for (let i = 0; i < maxPredictions; i++) {
        const name = prediction[i].className.toLowerCase();
        if (name.includes("background") || name.includes("orang")) {
            continue;
        }
        
        if (!highest || prediction[i].probability > highest.probability) {
            highest = prediction[i];
        }
    }
    
    if (highest) {
        tampilkanHasil(highest.className, highest.probability);
    }
}

// Hitung confidence & tampilkan
function tampilkanHasil(label, prob) {
    const confidence = Math.round(prob * 100);
    
    resultLabel.innerText = label.toUpperCase();
    confidenceText.innerText = confidence + "%";
    confidenceFill.style.width = confidence + "%";
    
    berikanRekomendasi(label, confidence);
}

// Beri rekomendasi tempat sampah
function berikanRekomendasi(label, conf) {
    let html = "";
    
    if (conf >= 90) {
        const l = label.toLowerCase();
        if (l === "botol plastik") {
            html = "<p>🧋 SAMPAH BOTOL PLASTIK</p><p>Silakan buang ke tempat sampah KUNING.</p>";
        } else if (l === "plastik") {
            html = "<p>🧴 SAMPAH PLASTIK</p><p>Silakan buang ke tempat sampah KUNING.</p>";
        } else if (l === "kertas") {
            html = "<p>📄 SAMPAH KERTAS</p><p>Silakan masukkan ke tempat sampah BIRU.</p>";
        } else if (l === "logam") {
            html = "<p>🧷 SAMPAH LOGAM</p><p>Silakan masukkan ke tempat sampah KUNING.</p>";
        } else {
            html = "<p>🔍 Sampah dikenali: " + label.toUpperCase() + "</p>";
        }
    } else {
        html = "<p>🔍 Belum dapat mengenali sampah dengan jelas.</p><p>Coba arahkan kamera lebih dekat dan pastikan pencahayaan cukup.</p>";
    }
    
    recommendationBox.innerHTML = html;
}

// Hentikan kamera
function stopCamera() {
    isPredicting = false;
    if (webcam) {
        webcam.stop();
        webcamWrapper.innerHTML = '';
    }
    stopBtn.style.display = "none";
    startBtn.style.display = "block";
    resultContainer.style.display = "none";
    statusText.innerText = "SYS_TERMINATED";
    statusText.style.color = "var(--secondary)";
}
