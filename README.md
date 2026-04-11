# 🏠 Homelytics — AI-Powered Interior Design Platform

Transform your empty rooms into beautifully furnished spaces using AI-powered image generation with ControlNet depth preservation, smart budget planning, and direct purchase links. Optimized for local GPU execution (NVIDIA RTX 3050 6GB).

---

## ✨ Features

### 🎨 AI Room Generation (Image-to-Image)
- **ControlNet + Depth Map**: Preserves your room's walls, windows, and floor structure using Midas depth estimation + ControlNet conditioning
- **Structured Prompts**: Your simple prompt is wrapped in a professional interior-design template for best SD results
- **Negative Prompt Protection**: Blocks unwanted artifacts (people, cartoon, blurry, wrong architecture, etc.)
- **Furniture Enforcement**: Automatically detects furniture items in your prompt and adds explicit enforcement so nothing is missing
- **Two-Stage Hi-Res Fix**: Stage 1 generates furniture layout → Stage 2 refines details for sharper output
- **✨ Improve My Prompt (AI)**: One-click Groq LLM-powered prompt enhancement that turns "Add a bed, sofa, lamp" into a detailed SD-optimized prompt
- **Before/After Comparison Slider**: Drag-to-compare your original room vs the AI-furnished result
- **Multiple Styles**: Modern, Contemporary, Minimalist, Industrial, Bohemian, Scandinavian, Traditional, Rustic
- **Room Types**: Living Room, Bedroom, Kitchen, Bathroom, Office, Dining Room, Kids Room, Outdoor

### 🏗️ 2D Layout Generator
- Converts Total Area + Room Count into 4 professional top-down architectural floor plans
- Blueprint-style output using Stable Diffusion v1.5 with layout tokens
- Supports 1 BHK, 2 BHK, 3 BHK, 4 BHK, Studio, and Villa configurations

### 🛋️ Drag & Drop Customization
- Manually place furniture over your uploaded room image
- Rotate, resize, and delete items with real-time selection controls
- Canvas zoom from 50% to 200% for precision

### 💰 Smart Budget Planning
- Budget slider from ₹10,000 to ₹5,00,000
- Priority-based furniture selection for each room type
- Room dimensions input (Length × Width × Height in feet)
- Real-time cost breakdown and budget utilization percentage

### 🛒 E-Commerce Integration
- Direct Amazon & Flipkart purchase links for all 28 furniture items
- Prices in Indian Rupees (₹) based on market averages
- One-click "Buy" buttons in the pricing panel

---

## 📋 Prerequisites

Before starting, make sure you have:

| Requirement | Version | Download Link |
|------------|---------|---------------|
| **Node.js** | 18+ | [nodejs.org](https://nodejs.org/) |
| **Python** | 3.10+ | [python.org](https://www.python.org/downloads/) |
| **NVIDIA GPU** | 6GB+ VRAM | RTX 3050 / 3060 / 4060 or better |
| **CUDA Toolkit** | 12.1+ | [NVIDIA CUDA](https://developer.nvidia.com/cuda-downloads) |
| **Git** | Any | [git-scm.com](https://git-scm.com/) |
| **Hugging Face Account** | Free | [huggingface.co/join](https://huggingface.co/join) |
| **Groq API Key** (optional) | Free | [console.groq.com](https://console.groq.com) |

> **Disk Space**: You need ~10GB free for model downloads (SD v1.5 + ControlNet + Midas).

---

## 🚀 Setup & Installation (Step-by-Step)

### Step 1 — Clone the Repository

```bash
git clone https://github.com/ekta-240/image-to-image-generation.git
cd image-to-image-generation
```

---

### Step 2 — Install Frontend Dependencies

```bash
npm install
```

This installs React, Vite, Framer Motion, react-compare-image, and all other frontend packages.

---

### Step 3 — Create Python Virtual Environment

```bash
# Create virtual environment in the project root
python -m venv .venv

# Activate it:
# Windows (PowerShell):
.\.venv\Scripts\activate

# Windows (CMD):
.venv\Scripts\activate.bat

# macOS / Linux:
source .venv/bin/activate
```

> ⚠️ Make sure your terminal shows `(.venv)` at the beginning of the prompt line before continuing.

---

### Step 4 — Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

This installs:
- `torch` — PyTorch with CUDA support
- `diffusers` — Stable Diffusion pipelines
- `controlnet_aux` — Midas depth estimator for ControlNet
- `transformers`, `accelerate`, `safetensors` — Hugging Face ecosystem
- `flask`, `flask-cors` — Backend web server
- `requests` — For Groq API calls
- `Pillow` — Image processing

---

### Step 5 — Set Your Hugging Face Token

You need a Hugging Face token for the first-time model download.

1. Go to https://huggingface.co/settings/tokens
2. Create a new token (read access is enough)
3. Set it as an environment variable:

```bash
# Windows PowerShell:
$env:HF_TOKEN="hf_your_token_here"

# Windows CMD:
set HF_TOKEN=hf_your_token_here

# macOS / Linux:
export HF_TOKEN="hf_your_token_here"
```

> After the first run, models are cached locally and the token is no longer needed.

---

### Step 6 — Set Your Groq API Key (Optional — for "Improve My Prompt" feature)

1. Go to https://console.groq.com and create a free account
2. Generate an API key
3. Open `backend/app.py` and find this line (around line 44):
   ```python
   GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "YOUR_GROQ_API_KEY")
   ```
4. Either replace `"YOUR_GROQ_API_KEY"` with your actual key, OR set it as an environment variable:
   ```bash
   # Windows PowerShell:
   $env:GROQ_API_KEY="gsk_your_key_here"
   
   # macOS / Linux:
   export GROQ_API_KEY="gsk_your_key_here"
   ```

> If Groq is not configured, the "Improve My Prompt" button will still work — it falls back to a local prompt builder.

---

### Step 7 — Firebase Setup (For Drag & Drop Feature)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project named **Homelytics**
3. Go to **Firestore Database** → Create Database → Start in test mode
4. Go to **Project Settings** → **Your Apps** → Click the Web (`</>`) icon
5. Copy the `firebaseConfig` object
6. Create `src/firebase.js` (or copy from `src/firebase_example.js`) and paste your config:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { /* PASTE YOUR CONFIG HERE */ };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

> **One-time data migration**: To load the 50 furniture items into Firestore, temporarily render `<Migration />` in `App.jsx`, open the browser, click "Push Library to Firestore", then revert `App.jsx`.

---

## 🛠️ Running the Project

You need **two terminals** — one for the backend and one for the frontend.

### Terminal 1 — Start the Backend (AI Server)

```bash
# From the project root:
cd backend

# Activate virtual environment (if not already active):
# Windows:
..\.venv\Scripts\activate
# macOS/Linux:
source ../.venv/bin/activate

# Start the server:
python app.py
```

**What happens on first run:**
1. Midas depth estimator downloads (~400 MB) ← takes 1-2 minutes
2. ControlNet depth model downloads (~1.4 GB) ← takes 2-3 minutes
3. Stable Diffusion v1.5 downloads (~5 GB) ← takes 5-15 minutes
4. 2D Layout pipeline loads

**Wait until you see this in the terminal:**
```
============================================================
HOMELYTICS BACKEND SERVER
============================================================
Device: cuda
Model: runwayml/stable-diffusion-v1-5
ControlNet: lllyasviel/sd-controlnet-depth
Depth Estimator: Ready
Layout Model: Loaded
============================================================
 * Running on http://127.0.0.1:5000
```

> ⏱️ First run: 10-20 minutes (model downloads). Subsequent runs: ~60 seconds (cached models).

---

### Terminal 2 — Start the Frontend (UI)

```bash
# From the project root (NOT the backend folder):
npm run dev
```

You should see:
```
VITE v5.x.x  ready in 500 ms
  ➜  Local:   http://localhost:3000/
```

---

### Open in Browser

Go to: **http://localhost:3000**

| Page | URL | Description |
|------|-----|-------------|
| Home | http://localhost:3000/ | Landing page |
| AI Generate | http://localhost:3000/ai-generate | Upload room → Generate furnished room |
| Customize | http://localhost:3000/customize | Drag & drop furniture placement |
| Layouts | http://localhost:3000/generate-layout | 2D floor plan generator |

---

## 🎮 How to Use the AI Generation Feature

1. **Upload** an empty room image (PNG, JPG, JPEG, or WEBP)
2. **Select** the room type (Living Room, Bedroom, etc.)
3. **Choose** a design style (Modern, Minimalist, etc.)
4. **(Optional)** Set your budget and click **"Get Budget Suggestions"** — this auto-fills the prompt
5. **Type** your furniture prompt, e.g., `Add a bed, sofa, table, and lamp`
6. **(Optional)** Click **"✨ Improve My Prompt"** to get an AI-enhanced, detailed prompt
7. Click **"Generate Room Design"**
8. Wait ~45 seconds (RTX 3050) for the two-stage generation
9. View the **Before/After comparison slider** to compare original vs furnished
10. **Download** or **Share** the result
11. Click **"Pricing"** to see estimated furniture costs with Amazon/Flipkart links

---

## 📁 Project Structure

```
homelytics/
├── src/
│   ├── App.jsx                    # Router setup
│   ├── firebase.js                # Firebase initialization
│   ├── index.css                  # Global styles
│   ├── main.jsx                   # React entry point
│   ├── components/
│   │   └── Navbar.jsx             # Navigation bar
│   └── pages/
│       ├── AIGeneration.jsx       # AI room generation with Improve Prompt + Compare slider
│       ├── DragDropCustomize.jsx  # Canvas-based furniture placement
│       ├── Home.jsx               # Landing page
│       └── LayoutGenerator.jsx    # 2D floor plan generator
├── backend/
│   ├── app.py                     # Flask API: ControlNet generation, Groq prompts, budget API
│   ├── requirements.txt           # Python dependencies
│   ├── uploads/                   # Uploaded images (auto-created)
│   └── generated/                 # Generated images (auto-created)
├── package.json                   # Frontend dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── README.md                      # This file
```

---

## 🔧 AI Pipeline Technical Details

### Models Used
| Model | Purpose | Size |
|-------|---------|------|
| `runwayml/stable-diffusion-v1-5` | Base image generation | ~5 GB |
| `lllyasviel/sd-controlnet-depth` | Room structure preservation | ~1.4 GB |
| `lllyasviel/Annotators` (Midas) | Depth map extraction | ~400 MB |
| `llama-3.1-8b-instant` (Groq) | Prompt improvement | Cloud API |

### Generation Pipeline
```
User Prompt
    ↓
extract_furniture_items() → detects: bed, sofa, table, lamp
    ↓
build_structured_prompt() → wraps in interior design template
    ↓
enforce_furniture_in_prompt() → adds "must contain: bed, sofa, table, lamp"
    ↓
MidasDetector → extracts depth map from uploaded room
    ↓
Stage 1: ControlNet generation (strength=0.70, 50 steps)
    ↓
Stage 2: Hi-res refinement (strength=0.25, 30 steps)
    ↓
Final furnished room image
```

### GPU Memory Optimizations (RTX 3050 6GB)
- `torch.float16` — Half precision to halve VRAM usage
- `enable_model_cpu_offload()` — Moves unused layers to RAM
- `enable_attention_slicing(1)` — Processes attention in slices
- `enable_vae_slicing()` — Decodes VAE in slices

---

## 🔑 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Server health check — shows model status |
| `POST` | `/api/generate` | Generate furnished room image (multipart form) |
| `POST` | `/api/generate-layout` | Generate 4 floor plan layouts |
| `POST` | `/api/suggest-furniture` | Budget-based furniture suggestions |
| `POST` | `/improve-prompt` | AI prompt enhancement via Groq |

---

## 📊 Furniture Library

50 items across 8 categories:

| Category | Items |
|----------|-------|
| **Seating** | Modern Sofa, Armchair, Recliner, Bean Bag, Bar Stool |
| **Tables** | Coffee Table, Side Table, Dining Table, Console Table, Study Table |
| **Lighting** | Floor Lamp, Table Lamp, Chandelier, Smart Bulb |
| **Bedroom** | Bed, Nightstand, Wardrobe, Dresser, Chest |
| **Storage** | Bookshelf, TV Stand, Cabinet, Shelf |
| **Kitchen** | Refrigerator, Gas Stove, Kitchen Cabinet, Microwave, Dishwasher |
| **Bathroom** | Bathtub, Shower, Sink, Mirror |
| **Decor** | Wall Art, Area Rug, Curtains, Plant, Artificial Plant |

---

## ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| `CUDA out of memory` | Close other GPU apps. The pipeline uses CPU offload for 6GB cards. |
| `Model download fails` | Check your internet connection. Models are cached in `~/.cache/huggingface/`. Delete the cache and retry. |
| `ModuleNotFoundError: controlnet_aux` | Run `pip install controlnet_aux` in your virtual environment. |
| `Groq API returns 400` | The model name may have changed. Check [Groq docs](https://console.groq.com/docs/models) for available models. |
| `Port 5000 already in use` | Kill the existing process: `netstat -ano | findstr :5000` then `taskkill /PID <pid> /F` |
| `Port 3000 already in use` | Vite will auto-select the next available port (3001, 3002, etc.) |
| Backend shows `Demo mode active` | Either GPU is not available or `USE_LOCAL_MODEL=False`. Check `python -c "import torch; print(torch.cuda.is_available())"` |

---

## 📝 License

This project is for educational purposes (B.Tech final year project).

---

## 🙏 Credits

- [Stable Diffusion v1.5](https://huggingface.co/runwayml/stable-diffusion-v1-5) — RunwayML
- [ControlNet](https://huggingface.co/lllyasviel/sd-controlnet-depth) — lllyasviel
- [Midas Depth Estimation](https://huggingface.co/lllyasviel/Annotators) — lllyasviel
- [Groq](https://groq.com/) — Fast LLM inference
- [Diffusers](https://huggingface.co/docs/diffusers) — Hugging Face
- [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [Tailwind CSS](https://tailwindcss.com/)
