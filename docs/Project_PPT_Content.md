# HOMELYTICS - AI-Powered Interior Design Platform
## B.Tech Final Year Project Presentation

---

# SLIDE 1: TITLE SLIDE

**HOMELYTICS**
*AI-Powered Interior Design Platform with Smart Budget Planning*

**Submitted By:**
- [Your Name]
- [Roll Number]
- B.Tech Computer Science Engineering
- [Batch Year]

**Under the Guidance of:**
- [Guide Name]
- [Designation]

**[College Name]**
**[University Name]**

---

# SLIDE 2: INTRODUCTION

## What is Homelytics?

Homelytics is an **AI-powered web application** that transforms empty room photographs into beautifully furnished interior designs using **Stable Diffusion** deep learning models.

### Key Highlights:
- 🎨 **AI Image Generation** - Upload room photo → Get AI-designed furnished room
- 💰 **Smart Budget Planning** - Set budget (₹10,000 - ₹5,00,000) and get optimal furniture suggestions
- 🛒 **E-Commerce Integration** - Direct Amazon & Flipkart purchase links for 28 furniture items
- 🖱️ **Drag & Drop Mode** - Manual furniture placement with real-time pricing
- 🖥️ **Local GPU Processing** - Runs on personal NVIDIA GPU (RTX 3050+), no cloud dependency

### Problem Statement:
Interior design consultation is expensive (₹50,000-₹2,00,000) and time-consuming. Most people cannot visualize how furniture will look in their space before purchasing, leading to poor decisions and wasted money.

---

# SLIDE 3: LITERATURE REVIEW

## Existing Solutions & Research Background

### 1. Traditional Interior Design Services
- **Cost:** ₹50,000 - ₹2,00,000 for consultation
- **Time:** 2-6 weeks for design proposals
- **Limitation:** Not accessible to middle-class families

### 2. AR-Based Apps (IKEA Place, Houzz)
- **Technology:** Augmented Reality
- **Limitation:** Only shows individual items, not complete room transformation
- **Gap:** No AI-based complete room generation

### 3. Generative AI Research
- **Stable Diffusion (2022)** - Latent diffusion model for image generation
- **ControlNet (2023)** - Structure-preserving image generation
- **Img2Img Pipeline** - Transform existing images while preserving structure

### 4. Research Gap Identified:
- No affordable solution combining AI room generation + budget planning + e-commerce
- Existing AI tools don't provide furniture pricing or purchase options
- No solution optimized for Indian market (₹ pricing, Indian e-commerce links)

### References:
1. Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models" (2022)
2. Zhang et al., "Adding Conditional Control to Text-to-Image Diffusion Models" (2023)
3. Hugging Face Diffusers Library Documentation

---

# SLIDE 4: PROBLEM DOMAIN IDENTIFICATION

## Core Problems Addressed

### Problem 1: High Cost of Interior Design
- Professional designers charge ₹50,000-₹2,00,000
- Middle-class families cannot afford consultation
- **Our Solution:** Free AI-powered design generation

### Problem 2: Visualization Difficulty
- People cannot imagine how furniture will look in their space
- Wrong purchases lead to returns and losses
- **Our Solution:** Upload room photo → See AI-generated furnished version

### Problem 3: Budget Management Challenges
- No tool helps plan furniture within a budget
- Overspending is common during home furnishing
- **Our Solution:** Smart budget algorithm suggests optimal furniture within budget

### Problem 4: Fragmented Shopping Experience
- Users design separately and shop separately
- No integration between design and purchase
- **Our Solution:** Direct Amazon & Flipkart purchase links for each furniture item

### Problem 5: Cloud Dependency & Privacy
- Most AI tools require uploading images to cloud servers
- Privacy concerns with home interior photos
- **Our Solution:** 100% local GPU processing, no data leaves user's computer

---

# SLIDE 5: FEASIBILITY OF PROJECT

## Technical Feasibility

### Hardware Requirements (Tested & Verified):
| Component | Minimum | Recommended |
|-----------|---------|-------------|
| GPU | RTX 3050 6GB | RTX 3060 12GB+ |
| RAM | 8GB | 16GB |
| Storage | 10GB free | 20GB free |
| CUDA | 12.1+ | 12.3+ |

### Software Stack Availability:
- ✅ React 18 - Open source, free
- ✅ Flask 3.0 - Open source, free
- ✅ PyTorch 2.1 - Open source, free
- ✅ Stable Diffusion - Open source model (Hugging Face)
- ✅ Tailwind CSS - Open source, free

## Economic Feasibility
- **Development Cost:** ₹0 (all open-source tools)
- **Hardware Cost:** Student's existing laptop with RTX GPU
- **Hosting Cost:** ₹0 (local deployment for demo)
- **ROI:** High potential for SaaS monetization

## Operational Feasibility
- Single developer can maintain the system
- No special training required for end users
- Intuitive drag-and-drop interface

## Market Feasibility
- India's furniture market: $17.77 billion (2023)
- Growing at 10.5% CAGR
- 89% of millennials prefer online furniture shopping with visualization

---

# SLIDE 6: OBJECTIVES

## Project Objectives

### Primary Objectives:
1. **Develop an AI-powered image generation system** that transforms empty room photographs into furnished interior designs using Stable Diffusion img2img pipeline

2. **Implement smart budget planning algorithm** that suggests optimal furniture items within user-specified budget (₹10,000 - ₹5,00,000)

3. **Create e-commerce integration** with direct purchase links to Amazon India and Flipkart for all 28 furniture items

4. **Build responsive web interface** using React.js with modern UI/UX design patterns

5. **Optimize for local GPU execution** to ensure privacy and eliminate cloud dependency

### Secondary Objectives:
6. Implement drag-and-drop furniture customization mode
7. Support 8 interior design styles (Modern, Contemporary, Minimalist, etc.)
8. Support 8 room types (Living Room, Bedroom, Kitchen, etc.)
9. Provide real-time furniture pricing in Indian Rupees (₹)
10. Enable design download and sharing functionality

### Success Metrics:
- Image generation time: < 30 seconds on RTX 3050
- Budget algorithm response: < 1 second
- 100% pricing accuracy with case-insensitive keyword matching

---

# SLIDE 7: METHODOLOGY

## Development Methodology: Agile with Iterative Prototyping

### Phase 1: Research & Planning (Week 1-2)
- Literature review of Stable Diffusion and img2img techniques
- Analysis of existing interior design tools
- Requirements gathering and system design

### Phase 2: Backend Development (Week 3-5)
- Flask API setup with CORS configuration
- Stable Diffusion pipeline integration with GPU optimization
- Furniture pricing database creation (28 items in ₹)
- Budget suggestion algorithm implementation

### Phase 3: Frontend Development (Week 6-8)
- React application scaffolding with Vite
- UI component development (Home, AI Generation, Drag & Drop)
- Axios integration for API communication
- Framer Motion animations for better UX

### Phase 4: Integration & Testing (Week 9-10)
- Frontend-Backend integration testing
- GPU memory optimization (CPU offload, attention slicing)
- Performance benchmarking on RTX 3050

### Phase 5: Documentation & Deployment (Week 11-12)
- User documentation and README
- Project presentation preparation
- Local deployment setup and demo

---

# SLIDE 8: SYSTEM ARCHITECTURE

## High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                             │
│                    (React App on localhost:3000)                 │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │ HTTP Requests (Axios)
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      FLASK BACKEND (localhost:5000)              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │ /api/generate   │  │ /api/suggest-   │  │ /api/health     │  │
│  │ (AI Generation) │  │ furniture       │  │ (Status Check)  │  │
│  └────────┬────────┘  └────────┬────────┘  └─────────────────┘  │
│           │                    │                                 │
│           ▼                    ▼                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │              STABLE DIFFUSION PIPELINE                       ││
│  │  Model: SG161222/Realistic_Vision_V5.1_noVAE                ││
│  │  Optimizations: FP16, CPU Offload, Attention Slicing        ││
│  └─────────────────────────────────────────────────────────────┘│
│           │                    │                                 │
│           ▼                    ▼                                 │
│  ┌─────────────────┐  ┌─────────────────────────────────────┐   │
│  │ NVIDIA RTX 3050 │  │ FURNITURE DATABASE (28 items)        │   │
│  │ 6GB VRAM (CUDA) │  │ Prices in ₹ + Amazon/Flipkart Links │   │
│  └─────────────────┘  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Stack:

| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | React 18 + Vite 5 | SPA Framework |
| Styling | Tailwind CSS 3.3 | Utility-first CSS |
| Animations | Framer Motion 10 | Smooth UI animations |
| HTTP Client | Axios 1.6 | API communication |
| Backend | Flask 3.0 | REST API server |
| AI Model | Stable Diffusion (Diffusers 0.24) | Image generation |
| Deep Learning | PyTorch 2.1 + CUDA 12.1 | GPU acceleration |
| Image Processing | Pillow 10.1 | Image manipulation |

---

# SLIDE 9: MODULE DESCRIPTION

## Module 1: AI Image Generation Module

**File:** `backend/app.py` - `/api/generate` endpoint

**Functionality:**
- Receives room image + prompt + style + room_type
- Resizes image to 512x512 for optimal VRAM usage
- Builds enhanced prompt with style descriptors
- Runs Stable Diffusion img2img pipeline
- Returns base64 encoded generated image + pricing

**Key Parameters:**
```python
strength = 0.65        # Preserves 35% original structure
guidance_scale = 15.0  # Balanced prompt following
num_inference_steps = 70  # High quality output
```

---

## Module 2: Smart Budget Planning Module

**File:** `backend/app.py` - `/api/suggest-furniture` endpoint

**Algorithm: Priority-Based Greedy Selection**
```
Input: room_type, budget, dimensions (optional)
1. Get priority list for room type
   Living Room: [sofa, coffee_table, tv_stand, rug, lamp...]
   Bedroom: [bed, nightstand, table_lamp, rug, curtains...]
2. For each item in priority order:
   If item.price <= remaining_budget:
       Add to selected list
       Subtract price from remaining_budget
3. Return: items[], total_cost, budget_utilization%
```

**Furniture Database:** 28 items with Indian pricing
- Sofa: ₹107,800 | Bed: ₹157,600 | Dining Table: ₹74,600
- Table Lamp: ₹7,400 | Plant: ₹6,600 | Curtains: ₹10,700

---

## Module 3: Pricing & E-Commerce Module

**Functionality:**
- Case-insensitive keyword matching using regex
- Supports multiple keyword variants per item
- Generates Amazon & Flipkart search links
- Fallback pricing for custom items: ₹35,000

**Keyword Matching Example:**
```
Prompt: "Add a table lamp and coffee table"
Detected: table_lamp (₹7,400), coffee_table (₹29,000)
Total: ₹36,400
Links: Amazon India, Flipkart for each item
```

---

## Module 4: Frontend UI Module

**Files:** `src/pages/AIGeneration.jsx`, `Home.jsx`, `DragDropCustomize.jsx`

**Components:**
1. **Home Page** - Feature showcase, testimonials, gallery
2. **AI Generation Page** - Upload, budget slider, style selection, generate
3. **Drag & Drop Page** - Manual furniture placement with pricing

**Key Libraries:**
- React Dropzone - File upload with drag-drop
- Framer Motion - Animations and transitions
- Lucide React - Modern icon library
- html2canvas - Design export as PNG

---

# SLIDE 10: PROJECT ROADMAP & TIMELINE

## Gantt Chart Overview

| Week | Phase | Tasks | Deliverables |
|------|-------|-------|--------------|
| 1-2 | Research | Literature review, Requirements analysis | SRS Document |
| 3-4 | Backend Setup | Flask API, Stable Diffusion integration | Working API |
| 5-6 | AI Optimization | GPU optimization, Parameter tuning | Optimized model |
| 7-8 | Frontend Dev | React UI, Component development | UI screens |
| 9-10 | Integration | API integration, Budget algorithm | Full integration |
| 11 | Testing | Performance testing, Bug fixes | Test reports |
| 12 | Documentation | PPT, Demo preparation, README | Final deliverables |

## Milestone Achievement:

✅ **Milestone 1 (Week 4):** Backend API with image generation
✅ **Milestone 2 (Week 6):** GPU optimization for RTX 3050
✅ **Milestone 3 (Week 8):** Complete UI implementation
✅ **Milestone 4 (Week 10):** Budget planning + E-commerce integration
✅ **Milestone 5 (Week 12):** Project completion and demo ready

---

# SLIDE 11: PROGRESS TILL DATE

## Completed Features (100%)

### Backend (Flask + Stable Diffusion):
- ✅ Flask 3.0 REST API with 3 endpoints
- ✅ Stable Diffusion img2img pipeline integration
- ✅ GPU optimization for RTX 3050 6GB (CPU offload, attention slicing, FP16)
- ✅ 28-item furniture database with Indian pricing
- ✅ Priority-based budget suggestion algorithm
- ✅ Case-insensitive keyword matching for pricing
- ✅ Amazon & Flipkart purchase link generation

### Frontend (React + Vite):
- ✅ Responsive landing page with feature showcase
- ✅ AI Generation page with budget slider and room dimensions input
- ✅ Drag & Drop customization page
- ✅ Real-time pricing display with purchase buttons
- ✅ Image download and share functionality
- ✅ Smooth animations using Framer Motion

### Testing & Documentation:
- ✅ Performance benchmarking on RTX 3050
- ✅ README documentation with setup instructions
- ✅ Testing guide for all features

## Performance Metrics Achieved:
| Metric | Target | Achieved |
|--------|--------|----------|
| Generation Time | < 45 sec | 20-30 sec ✅ |
| Budget API Response | < 2 sec | < 1 sec ✅ |
| VRAM Usage | < 6GB | 5.5GB ✅ |
| Pricing Accuracy | 95% | 100% ✅ |

---

# SLIDE 12: DEMO SCREENSHOTS

## Screenshot 1: Landing Page
*[Insert screenshot of Home page with features]*

**Description:** Modern landing page showcasing AI Generation and Drag & Drop features with testimonials and statistics.

---

## Screenshot 2: Budget Planning Interface
*[Insert screenshot of budget slider and suggestions]*

**Description:** User sets budget (₹1,50,000), enters room dimensions, and receives optimized furniture suggestions with purchase links.

---

## Screenshot 3: AI Generation Result
*[Insert screenshot of before/after room transformation]*

**Description:** Original empty room transformed into furnished living room with Modern style. Pricing breakdown shows ₹1,67,700 total with Amazon/Flipkart links.

---

## Screenshot 4: Drag & Drop Interface
*[Insert screenshot of drag-drop customization]*

**Description:** Manual furniture placement mode with real-time pricing updates.

---

# SLIDE 13: FUTURE WORK

## Planned Enhancements

### Short-Term (3-6 months):
1. **User Authentication** - Save designs, view history
2. **Higher Resolution Output** - 768x768 and 1024x1024 options
3. **More Furniture Items** - Expand from 28 to 100+ items
4. **Real-time Price API** - Fetch live prices from Amazon/Flipkart

### Medium-Term (6-12 months):
5. **Mobile Application** - React Native app for iOS/Android
6. **AR Preview** - View furniture in real room using phone camera
7. **3D Visualization** - Three.js based 3D room preview
8. **ControlNet Integration** - Better structure preservation

### Long-Term (1-2 years):
9. **Multi-GPU Support** - Faster generation for commercial use
10. **SaaS Deployment** - Cloud-based subscription model
11. **AI Style Learning** - Custom model fine-tuning for Indian interiors
12. **B2B Integration** - API for furniture retailers

## Potential Business Model:
- **Freemium:** 5 free generations/month
- **Pro Plan:** ₹499/month for unlimited generations
- **Enterprise:** Custom pricing for furniture retailers

---

# SLIDE 14: ENTREPRENEURIAL POTENTIAL

## Business Model & Market Analysis

### Target Market:
- **Primary:** Middle-class Indian homeowners (25-45 years)
- **Secondary:** Real estate agents, Interior designers
- **Market Size:** India's furniture market - $17.77 billion (2023)

### Revenue Streams:
1. **Subscription Model:** ₹499/month Pro plan
2. **Affiliate Revenue:** Commission from Amazon/Flipkart purchases
3. **B2B API:** Furniture retailers integration
4. **White-label Solution:** For real estate platforms

### Competitive Advantage:
- 🆓 Free local processing (no cloud costs)
- 🇮🇳 Indian market focus (₹ pricing, local e-commerce)
- 💰 Budget planning feature (unique selling point)
- 🔒 Privacy-focused (no data upload to cloud)

### Startup Potential:
| Criteria | Details |
|----------|---------|
| Problem Relevance | High - Interior design is expensive & inaccessible |
| Innovation | Novel combination of AI + Budget + E-commerce |
| Scalability | Cloud deployment possible for SaaS |
| Market Validation | Growing demand for online furniture visualization |

---

# SLIDE 15: CONCLUSION

## Summary

### Project Achievements:
1. ✅ Successfully developed AI-powered interior design platform
2. ✅ Implemented Stable Diffusion img2img for room transformation
3. ✅ Created smart budget planning algorithm (₹10K - ₹5L range)
4. ✅ Integrated e-commerce links for seamless shopping
5. ✅ Optimized for local GPU execution (RTX 3050 6GB)

### Key Innovations:
- **First Solution** combining AI room generation + budget planning + e-commerce
- **100% Local Processing** - No cloud dependency, complete privacy
- **Indian Market Focus** - Pricing in ₹, Amazon India & Flipkart links

### Technical Learning:
- Deep Learning model deployment on consumer GPUs
- Full-stack development (React + Flask)
- GPU memory optimization techniques
- Image-to-image transformation using diffusion models

### Real-World Impact:
- Makes interior design accessible to middle-class families
- Helps users visualize furniture before expensive purchases
- Enables budget-conscious home furnishing decisions

---

# SLIDE 16: REFERENCES

## Academic References:

1. Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022). "High-Resolution Image Synthesis with Latent Diffusion Models." *CVPR 2022*.

2. Zhang, L., Rao, A., & Agrawala, M. (2023). "Adding Conditional Control to Text-to-Image Diffusion Models." *ICCV 2023*.

3. Ho, J., Jain, A., & Abbeel, P. (2020). "Denoising Diffusion Probabilistic Models." *NeurIPS 2020*.

## Technical Documentation:

4. Hugging Face Diffusers Library Documentation. https://huggingface.co/docs/diffusers

5. PyTorch Documentation - CUDA Semantics. https://pytorch.org/docs/stable/cuda.html

6. React Documentation. https://react.dev/

7. Flask Documentation. https://flask.palletsprojects.com/

## Online Resources:

8. Realistic Vision V5.1 Model. https://huggingface.co/SG161222/Realistic_Vision_V5.1_noVAE

9. Stable Diffusion Web UI by Automatic1111. https://github.com/AUTOMATIC1111/stable-diffusion-webui

10. India Furniture Market Report (2023). Mordor Intelligence.

---

# SLIDE 17: THANK YOU

## Questions & Answers

**Project Repository:**
https://github.com/ekta-240/image-to-image-generation

**Demo Available:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

**Contact:**
- [Your Email]
- [Your LinkedIn]

---

# APPENDIX: TECHNICAL DETAILS

## A1: API Endpoints

| Endpoint | Method | Input | Output |
|----------|--------|-------|--------|
| /api/generate | POST | image, prompt, room_type, style | base64 image, pricing |
| /api/suggest-furniture | POST | room_type, budget, dimensions | items[], total, utilization% |
| /api/health | GET | - | status, device, model info |

## A2: GPU Optimization Techniques Used

```python
# Memory optimizations for RTX 3050 6GB
pipe.enable_model_cpu_offload()    # Saves 2GB VRAM
pipe.enable_attention_slicing(1)   # Reduces attention memory
pipe.enable_vae_slicing()          # Reduces VAE memory
torch.cuda.empty_cache()           # Clears cache after generation
```

## A3: Furniture Database Sample

| Item | Price (₹) | Category |
|------|-----------|----------|
| Modern Sofa | 107,800 | Living Room |
| King Bed | 157,600 | Bedroom |
| Dining Table | 74,600 | Dining |
| Office Desk | 49,700 | Office |
| Table Lamp | 7,400 | Lighting |
| Decorative Plant | 6,600 | Decor |

## A4: Performance Benchmarks (RTX 3050 6GB)

| Metric | Value |
|--------|-------|
| Model Load Time | 8-15 seconds |
| Generation Time (512x512) | 20-30 seconds |
| VRAM Usage | ~5.5GB |
| Inference Steps | 70 |
| Strength | 0.65 |
| Guidance Scale | 15.0 |

---

# END OF PRESENTATION
