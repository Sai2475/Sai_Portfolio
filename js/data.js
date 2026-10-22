/**
 * Sai Sukumar — Portfolio Data Configuration
 * Centralized, structured data source for easy customization and maintenance.
 */

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Sai Sukumar S",
    shortName: "Sai Sukumar",
    eyebrow: "AI/ML Engineer · Deep Learning Researcher · Builder",
    headline: "Building intelligent systems. Turning research into useful products.",
    subheadline: "AIML undergraduate at SRM IST with peer-reviewed IEEE research, hands-on computer vision and edge AI engineering, and deployed GenAI / RAG applications. Bridging mathematical depth with production software.",
    location: "Chennai, Tamil Nadu, India",
    education: {
      degree: "B.Tech in Computer Science & Engineering (AIML)",
      institution: "SRM Institute of Science and Technology, Kattankulathur",
      period: "2023 — 2027",
      cgpa: "9.51 / 10",
      school: "Montfort Matriculation Higher Secondary School (Class XII: 84%)"
    },
    careerStatus: {
      status: "Accenture ASE Offer Received · Open to AI/ML & Research Opportunities"
    },
    contact: {
      email: "saisanjay3000@gmail.com",
      academicEmail: "ss3337@srmist.edu.in",
      phone: "+91 9514355997",
      linkedin: "https://www.linkedin.com/in/sai-sukumar2407/",
      github: "https://github.com/Sai2475",
      locationName: "Chennai, India"
    },
    assets: {
      portrait: "assets/sai-portrait.jpg",
      resumePdf: "assets/Sai_Sukumar_Resume.pdf"
    }
  },

  about: {
    tag: "01 // Profile & Focus Areas",
    heading: "From AI Research to Real-World Applications",
    lead: "I’m an AI/ML engineer in the making, driven by a simple idea: AI is most valuable when strong research translates into something people can actually use.",
    paragraphs: [
      "Currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at SRM Institute of Science and Technology, I work across deep learning, computer vision, and Generative AI. My experience spans developing attention-enhanced models for medical imaging and agricultural disease classification, building RAG-powered applications, and exploring computer vision for autonomous drone systems during my internship at ION Aerospace.",
      "Beyond research, I enjoy engineering complete solutions—from experimenting with models and designing retrieval pipelines to building interactive applications that solve practical problems. With two published IEEE research papers and projects such as EstatePulse and DataWhiz, I’m continually exploring how to bridge the gap between AI experimentation and usable software.",
      "Alongside my technical work, I contribute to student technical communities through research and leadership. I’m also beginning my professional journey with an Associate Software Engineer offer from Accenture, while continuing to grow as an engineer, researcher, and builder."
    ],
    mission: "My goal is simple: build intelligent systems that are technically sound, practically useful, and designed with real people in mind.",
    pillars: [
      {
        number: "01",
        title: "Machine Learning & Deep Learning",
        desc: "Developing and evaluating deep learning models for challenging classification problems, with an emphasis on convolutional architectures, attention mechanisms, feature enhancement, and model performance in medical imaging and agricultural computer vision."
      },
      {
        number: "02",
        title: "Generative AI & Intelligent Applications",
        desc: "Building LLM-powered applications using retrieval-augmented generation, semantic search, embeddings, and vector databases. Interested in developing reliable AI workflows that turn unstructured information into useful, source-grounded insights."
      },
      {
        number: "03",
        title: "Computer Vision & Autonomous Systems",
        desc: "Exploring visual perception, object detection, feature tracking, and SLAM for autonomous systems. My experience at ION Aerospace introduced me to the challenges of applying computer vision in drone navigation and resource-constrained environments."
      },
      {
        number: "04",
        title: "Applied AI & Data Intelligence",
        desc: "Turning raw data into actionable insights through automated analysis, visualization, and interactive applications. I enjoy combining Python, data processing, and LLM-based workflows to simplify complex analytical tasks."
      }
    ]
  },

  // Projects ordered: EstatePulse first, then DataWhiz, then GridScan
  projects: [
    {
      id: "estate-pulse",
      title: "EstatePulse",
      subtitle: "RAG-Based Real Estate Research Assistant",
      featured: true,
      category: "GenAI & RAG",
      date: "Jul 2026 - Aug 2026",
      summary: "End-to-end RAG application that ingests web articles and dynamically answers domain-specific real estate queries using semantic retrieval with source attribution.",
      problem: "Traditional search engines surface fragmented real estate reports with conflicting metrics, requiring manual synthesis across dozens of documents.",
      solution: "Engineered an intelligent retrieval pipeline with recursive character text chunking, Hugging Face BGE embeddings, ChromaDB vector indexing, and Groq LLM inference with source citations and diagnostic retrieval inspection.",
      techStack: ["Python", "LangChain", "RAG", "ChromaDB", "BGE Embeddings", "Groq LLM", "Streamlit"],
      highlights: [
        "Semantic document chunking with configurable overlap",
        "Sub-second vector retrieval with ChromaDB indexing",
        "Deterministic source attribution preventing hallucinated citations",
        "Interactive diagnostics panel with research-session history"
      ],
      pipeline: [
        { step: "01", label: "Multi-Source Web Ingestion & Text Chunking" },
        { step: "02", label: "BGE Embeddings & ChromaDB Vector Search" },
        { step: "03", label: "Groq LLM Inference & Source Citation" }
      ],
      githubUrl: "https://github.com/Sai2475/EstatePulse_RealEstate_research_tool",
      liveUrl: "https://estate-pulse-research-tool.streamlit.app/",
      statusText: "Live Streamlit App"
    },
    {
      id: "datawhiz",
      title: "DataWhiz",
      subtitle: "AI Data Analyst & Automated Workflow Engine",
      featured: true,
      category: "GenAI & Data Analytics",
      date: "Nov 2025",
      summary: "Autonomous data analytics application converting natural language questions into executable Pandas/NumPy workflows with sandboxed visualization generation.",
      problem: "Non-technical stakeholders struggle to extract insights from raw CSV/Excel datasets without writing custom SQL or Python scripts.",
      solution: "Engineered an LLM-driven execution agent using LLaMA 3.3 and Groq that safely writes, validates, and runs sandboxed data transformation code, generating interactive charts, statistical summaries, and downloadable reports.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly", "Flask", "Groq API", "LLaMA 3.3"],
      highlights: [
        "Natural language to validated Pandas code generation",
        "Sandboxed Python execution preventing arbitrary file access",
        "Interactive Plotly visualization and summary table exports",
        "Support for multi-sheet Excel and complex CSV schema ingestion"
      ],
      pipeline: [
        { step: "01", label: "Natural Language Query & Schema Analysis" },
        { step: "02", label: "Sandboxed Pandas & NumPy Code Execution" },
        { step: "03", label: "Interactive Plotly Charts & Diagnostic Export" }
      ],
      githubUrl: "https://github.com/Sai2475/AI_Data_Analyst",
      liveUrl: "https://datawhiz-ai.onrender.com/",
      statusText: "Live on Render"
    },
    {
      id: "gridscan",
      title: "GridScan",
      subtitle: "F1 Driver Facial Recognition & Profiling",
      featured: true,
      category: "Computer Vision & GenAI",
      date: "Jun 2025",
      summary: "AI-powered web application that identifies Formula 1 drivers from uploaded photos using facial recognition pipelines and generates contextual driver profiles.",
      problem: "Identifying drivers under helmets, team gear, or vintage historical photos is challenging for racing enthusiasts and media analysts.",
      solution: "Combined OpenCV facial landmark tracking and feature extraction with LLaMA 3 via Groq to analyze faces, cross-reference driver databases, and generate rich career statistics, current status, and telemetry insights.",
      techStack: ["Python", "OpenCV", "LLaMA 3", "Groq API", "Flask", "Computer Vision"],
      highlights: [
        "Multi-angle facial recognition pipeline with OpenCV",
        "Contextual profile synthesis for active and historic drivers",
        "Championship standings, telemetry bio, and team metadata",
        "Full-stack Flask web application deployed live on Render"
      ],
      pipeline: [
        { step: "01", label: "Facial Landmark Detection & Alignment" },
        { step: "02", label: "Multi-Angle Feature Extraction via OpenCV" },
        { step: "03", label: "LLaMA 3 Profile & Telemetry Synthesis" }
      ],
      githubUrl: "https://github.com/Sai2475/f1_driver_detection",
      liveUrl: "https://f1-driver-detection.onrender.com/",
      statusText: "Live on Render"
    }
  ],

  // Research Publications & Ongoing Work
  publications: [
    {
      id: "bone-tumor-radiographs",
      title: "Hybrid Deep Learning for Bone Tumor Classification in Radiographs: Multi-Scale Attention and Transformer Fusion",
      authors: "Sai Sukumar (1st Author), Allen Vinster Joel, Jashvanth",
      venue: "Research Manuscript · In Progress / Under Peer Review",
      date: "Ongoing 2026",
      status: "In Progress / Under Review",
      badge: "Ongoing Research · Under Review",
      isUnderReview: true,
      accuracy: "91.30% Validation Accuracy",
      dataset: "BTXRD (Bone Tumor X-ray Radiograph Dataset — 3,746 images)",
      architecture: "DenseNet-169 + MEAB (Multi-Scale Enhanced Attention Block) + Swin Transformer + Attentional Feature Fusion (AFF) + Explainable AI (Grad-CAM, LIME, SHAP)",
      abstract: "Formulated a unified hybrid deep learning architecture for classifying primary bone tumors into benign, malignant, and normal categories using 3,746 X-ray radiographs. The model synergizes DenseNet-169 for local dense feature reuse, a custom Multi-scale Enhanced Attention Block (MEAB) with multi-dilated convolutions and channel attention, and a Swin Transformer for long-range anatomical context, fused via an Attentional Feature Fusion (AFF) module. Incorporates Grad-CAM, LIME, and SHAP visualizations for clinical interpretability.",
      keyContributions: [
        "MEAB multi-dilated convolutions and channel attention capturing lesions across varying spatial scales",
        "Swin Transformer shifted-window attention establishing macro-anatomical skeletal relationships",
        "Attentional Feature Fusion (AFF) resolving semantic gaps between local CNN and global transformer representations",
        "Explainable AI (Grad-CAM, LIME, SHAP) providing multi-level transparent attribution for orthopedic oncology"
      ]
    },
    {
      id: "breast-cancer-classification",
      title: "Automated Breast Cancer Classification in Ultrasound Imaging Using Dense and Global Feature Fusion",
      authors: "Sai Sukumar et al.",
      venue: "IEEE Xplore",
      date: "May 2026",
      status: "Published in IEEE",
      badge: "IEEE Xplore Published",
      isUnderReview: false,
      ieeeUrl: "https://ieeexplore.ieee.org/document/11502589",
      accuracy: "92.46% Validation Accuracy",
      dataset: "BUSI (Breast Ultrasound Image) Dataset",
      architecture: "DenseNet-169 Backbone + Global Context Network (GCN) Block + Enhanced AdaptiveConcatPool2d",
      abstract: "Formulated an automated diagnostic pipeline for breast ultrasound scans utilizing a DenseNet-169 backbone combined with a Global Context Network block and an Enhanced AdaptiveConcatPool2d mechanism. The architecture simultaneously captures local morphological lesion indicators and global breast tissue contextual dependencies, achieving 92.46% validation accuracy under faculty guidance.",
      keyContributions: [
        "DenseNet-169 feature reuse preserving subtle micro-calcifications",
        "GCN block capturing long-range spatial tissue relationships",
        "AdaptiveConcatPool2d preserving both maximum feature activations and average background distribution"
      ]
    },
    {
      id: "potato-leaf-disease",
      title: "A Hybrid Deep Learning Model for Potato Leaf Disease Classification using Transfer Learning and Attention Mechanism",
      authors: "Sai Sukumar et al.",
      venue: "IEEE Xplore",
      date: "Jul 2025",
      status: "Published in IEEE",
      badge: "IEEE Xplore Published",
      isUnderReview: false,
      ieeeUrl: "https://ieeexplore.ieee.org/document/11140741",
      accuracy: "91.80% Classification Accuracy",
      dataset: "Kaggle Potato Leaf Disease Dataset",
      architecture: "DenseNet-169 Backbone + GSDW Block + Triplet Attention Module",
      abstract: "Engineered a hybrid computer vision classification architecture to detect early and late blight in potato crops. By pairing DenseNet-169 with Grouped Separable Dilated convolutions (GSDW) and a cross-dimension Triplet Attention module, the model captures multi-scale lesion patterns with reduced parameter overhead, delivering 91.80% classification accuracy.",
      keyContributions: [
        "Grouped Separable Dilated Convolutions (GSDW) for wider receptive fields without parameter explosion",
        "Triplet Attention capturing cross-dimensional channel and spatial interactions",
        "Significant resilience against ambient field noise and illumination changes"
      ]
    }
  ],

  // Experience & Leadership Timeline
  experience: [
    {
      id: "srm-acm-sigapp",
      role: "Research & Development Team Lead",
      company: "SRM ACM SIGAPP Student Chapter",
      location: "Chennai, India · Hybrid",
      period: "Oct 2025 — Present",
      type: "Student Leadership",
      description: "Leading R&D initiatives, architecting deep learning research projects, and mentoring team members in model engineering, computer vision, and applied generative AI systems.",
      skills: ["R&D Leadership", "Deep Learning", "Applied AI", "Project Mentorship", "Technical Architecture"]
    },
    {
      id: "iot-alliance-club",
      role: "Technical Manager (AIML)",
      company: "IoT Alliance Club",
      location: "Chennai, India · Hybrid",
      period: "Aug 2025 — Present",
      type: "Club Leadership",
      description: "Directing AI/ML initiatives, coordinating technical workshops, and driving intelligent edge computing projects integrating smart sensors and IoT hardware with predictive machine learning models.",
      skills: ["AI/ML Management", "Edge Computing", "IoT Integration", "Team Leadership", "Technical Workshops"]
    },
    {
      id: "ion-aerospace",
      role: "AI Research Intern",
      company: "ION Aerospace India",
      location: "Chennai, India",
      period: "Jun 2025 — Sep 2025",
      type: "Research Internship",
      description: "Researched and implemented deep learning-based object detection and Visual SLAM modules for autonomous drone navigation. Integrated computer vision algorithms for real-time feature tracking and supported AI model deployment in resource-constrained embedded edge environments.",
      skills: ["Computer Vision", "Object Detection", "Visual SLAM", "Embedded Edge AI", "Autonomous Drones"]
    },
    {
      id: "unified-mentor",
      role: "Machine Learning Intern",
      company: "Unified Mentor",
      location: "Chennai, India",
      period: "Jan 2025 — Feb 2025",
      type: "Internship",
      description: "Constructed and benchmarked supervised machine learning models on real-world datasets, including Heart Disease Prediction and Mobile Price Classification. Executed comprehensive EDA, feature selection, and model validation pipelines.",
      skills: ["Machine Learning", "Scikit-Learn", "Feature Engineering", "EDA", "Data Modeling"]
    },
    {
      id: "codealpha",
      role: "Python Programmer Intern",
      company: "CodeAlpha",
      location: "Chennai, India",
      period: "Feb 2025 — Mar 2025",
      type: "Internship",
      description: "Developed modular Python solutions including a rule-based NLP chatbot using NLTK, an interactive Hangman game, and automated YouTube video processing scripts. Maintained clean repository architectures with Git version control.",
      skills: ["Python", "NLTK", "NLP", "Automation Scripts", "Git / GitHub"]
    }
  ],

  // Skills with categorized modern metadata
  skills: {
    categories: [
      {
        name: "Programming Languages",
        icon: "code",
        items: ["Python", "C++", "JavaScript", "SQL", "C"]
      },
      {
        name: "AI & Deep Learning",
        icon: "brain",
        items: ["Deep Learning", "Computer Vision", "Generative AI", "Agentic AI", "RAG Systems", "NLP", "Feature Engineering", "EDA & Statistics"]
      },
      {
        name: "Frameworks & Libraries",
        icon: "layers",
        items: ["PyTorch", "TensorFlow", "LangChain", "LangGraph", "Transformers", "Hugging Face", "OpenCV", "Scikit-learn", "Pandas", "FastAPI", "Flask", "Streamlit", "NLTK"]
      },
      {
        name: "Vector & LLM Ecosystem",
        icon: "sparkles",
        items: ["ChromaDB", "Groq Cloud LLMs", "LLaMA 3 / 3.3", "BGE Embeddings", "Claude Code", "MCP (Model Context Protocol)", "Prompt Engineering"]
      },
      {
        name: "Developer Tools & Cloud",
        icon: "cloud",
        items: ["Git / GitHub", "Docker", "AWS SageMaker", "Microsoft Azure", "MongoDB", "Postman", "Power BI", "n8n Automation"]
      }
    ]
  },

  certifications: [
    {
      title: "AI Infrastructure and Operations Fundamentals",
      issuer: "NVIDIA",
      date: "Oct 2024"
    },
    {
      title: "Oracle Cloud Infrastructure Data Certified Foundations Associate",
      issuer: "Oracle",
      date: "Feb 2025"
    },
    {
      title: "Gemini for Application Developers",
      issuer: "Google Cloud Skills Boost",
      date: "Jun 2025"
    },
    {
      title: "Gemini for Data Scientists and Analysts",
      issuer: "Google Cloud Skills Boost",
      date: "Jun 2025"
    },
    {
      title: "Microsoft GitHub Copilot",
      issuer: "Microsoft",
      date: "Apr 2026"
    },
    {
      title: "Prompt Engineering for Everyone",
      issuer: "Cognitive Class",
      date: "Feb 2025"
    },
    {
      title: "Python: Mastering The Essentials",
      issuer: "Scaler",
      date: "Dec 2024"
    }
  ],

  currentlyExploring: [
    {
      topic: "Model Context Protocol (MCP) & Agent Tooling",
      desc: "Creating standardized protocol integrations enabling AI models to interact securely with local databases, dev environments, and external APIs."
    },
    {
      topic: "Edge Optimization for Vision Transformers",
      desc: "Investigating quantization (INT8/FP4) and structural pruning to deploy attention-based visual models on resource-tight edge hardware."
    },
    {
      topic: "Explainable AI in Radiological Diagnostics",
      desc: "Evaluating the clinical reliability and correlation between Grad-CAM, LIME, and SHAP attribution maps on orthopedic radiographs."
    },
    {
      topic: "Evaluated RAG & Retrieval Diagnostics",
      desc: "Developing self-correcting retrieval architectures that compute confidence scores and rerank contexts to eliminate hallucinations."
    }
  ]
};
