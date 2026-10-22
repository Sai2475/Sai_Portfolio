/**
 * Sai Sukumar — Portfolio Data Configuration
 * Centralized, structured data source for easy customization and maintenance.
 */

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Sai Sukumar S",
    shortName: "Sai Sukumar",
    eyebrow: "AI/ML ENGINEER · DEEP LEARNING RESEARCHER · BUILDER",
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
      badge: "Career Milestone",
      title: "Associate Software Engineer (ASE) Offer",
      company: "Accenture",
      status: "Offer Received · Open to AI/ML & Research Opportunities"
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
    lead: "I engineer intelligent applications that connect theoretical deep learning research with robust, real-world deployment.",
    paragraphs: [
      "I am an Artificial Intelligence and Machine Learning undergraduate at SRM Institute of Science and Technology (maintaining a 9.51/10 CGPA). My work focuses on deep learning model architecture, computer vision feature fusion, and generative AI systems with grounded semantic retrieval.",
      "As an AI Research Intern at ION Aerospace India, I contributed to deep learning-based object detection and SLAM pipelines for autonomous drone navigation under embedded edge constraints. Furthermore, I have authored and published two peer-reviewed research papers with IEEE, advancing medical imaging diagnostics for breast ultrasound classification and crop disease detection with custom attention blocks.",
      "Beyond academic research, I build and deploy production-ready web applications—ranging from RAG real estate research platforms with vector databases to automated natural-language data analysis agents."
    ],
    pillars: [
      {
        title: "Deep Learning & Vision Research",
        desc: "Designing hybrid backbones, attention mechanisms (Triplet, GCN), and multi-scale feature fusion for complex classification benchmarks."
      },
      {
        title: "GenAI & Agentic Architectures",
        desc: "Architecting RAG pipelines with chunking strategies, vector search (ChromaDB), hallucination reduction, and sandboxed code execution."
      },
      {
        title: "Edge AI & Autonomous Systems",
        desc: "Optimizing computer vision models and SLAM modules for real-time inference on resource-constrained embedded hardware."
      },
      {
        title: "Research-to-Production Pipeline",
        desc: "Translating empirical findings and PyTorch architectures into responsive, containerized, and deployed web services."
      }
    ]
  },

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
        { step: "03", label: "LLaMA 3 Groq Profile & Telemetry Synthesis" }
      ],
      githubUrl: "https://github.com/Sai2475/f1_driver_detection",
      liveUrl: "https://f1-driver-detection.onrender.com/",
      statusText: "Live on Render"
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
        { step: "01", label: "Natural Language Analysis Query Parsing" },
        { step: "02", label: "Sandboxed Pandas & NumPy Code Execution" },
        { step: "03", label: "Interactive Plotly Charts & Diagnostic Export" }
      ],
      githubUrl: "https://github.com/Sai2475/AI_Data_Analyst",
      liveUrl: "https://datawhiz-ai.onrender.com/",
      statusText: "Live on Render"
    }
  ],

  publications: [
    {
      id: "breast-cancer-classification",
      title: "Automated Breast Cancer Classification in Ultrasound Imaging Using Dense and Global Feature Fusion",
      venue: "IEEE Xplore",
      date: "May 2026",
      status: "Published in IEEE",
      badge: "IEEE Xplore Published",
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
      venue: "IEEE Xplore",
      date: "Jul 2025",
      status: "Published in IEEE",
      badge: "IEEE Xplore Published",
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

  experience: [
    {
      id: "accenture-offer",
      role: "Associate Software Engineer (ASE)",
      company: "Accenture",
      location: "India",
      period: "Upcoming / Offer Received",
      type: "Career Milestone",
      isOffer: true,
      description: "Received full-time employment offer for the Associate Software Engineer role following competitive technical and analytical evaluations. Prepared to contribute to enterprise-scale software engineering, system architecture, and intelligent application delivery.",
      skills: ["Software Engineering", "Systems Architecture", "Enterprise AI", "Algorithms"]
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
      id: "codealpha",
      role: "Python Programmer Intern",
      company: "CodeAlpha",
      location: "Chennai, India",
      period: "Feb 2025 — Mar 2025",
      type: "Internship",
      description: "Developed modular Python solutions including a rule-based NLP chatbot using NLTK, an interactive Hangman game, and automated YouTube video processing scripts. Maintained clean repository architectures with Git version control.",
      skills: ["Python", "NLTK", "NLP", "Automation Scripts", "Git / GitHub"]
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
    }
  ],

  skills: {
    categories: [
      {
        name: "Programming Languages",
        items: [
          { name: "Python", level: "Primary", highlight: true },
          { name: "C++", level: "Proficient", highlight: true },
          { name: "JavaScript", level: "Intermediate", highlight: false },
          { name: "SQL", level: "Proficient", highlight: false },
          { name: "C", level: "Foundational", highlight: false },
          { name: "Java", level: "Foundational", highlight: false }
        ]
      },
      {
        name: "AI & Deep Learning",
        items: [
          { name: "Deep Learning", level: "Advanced", highlight: true },
          { name: "Computer Vision", level: "Advanced", highlight: true },
          { name: "Generative AI", level: "Advanced", highlight: true },
          { name: "Agentic AI", level: "Proficient", highlight: true },
          { name: "RAG Systems", level: "Advanced", highlight: true },
          { name: "NLP", level: "Proficient", highlight: false },
          { name: "Feature Engineering", level: "Proficient", highlight: false },
          { name: "EDA & Statistics", level: "Proficient", highlight: false }
        ]
      },
      {
        name: "Frameworks & Libraries",
        items: [
          { name: "PyTorch", level: "Primary", highlight: true },
          { name: "TensorFlow", level: "Proficient", highlight: false },
          { name: "LangChain", level: "Advanced", highlight: true },
          { name: "LangGraph", level: "Proficient", highlight: true },
          { name: "Transformers", level: "Advanced", highlight: true },
          { name: "Hugging Face", level: "Advanced", highlight: true },
          { name: "OpenCV", level: "Advanced", highlight: true },
          { name: "Scikit-learn", level: "Advanced", highlight: false },
          { name: "Pandas & NumPy", level: "Primary", highlight: false },
          { name: "FastAPI", level: "Proficient", highlight: false },
          { name: "Flask", level: "Proficient", highlight: false },
          { name: "Streamlit", level: "Proficient", highlight: false }
        ]
      },
      {
        name: "Vector & LLM Ecosystem",
        items: [
          { name: "ChromaDB", level: "Proficient", highlight: true },
          { name: "Groq Cloud LLMs", level: "Advanced", highlight: true },
          { name: "LLaMA 3 / 3.3", level: "Advanced", highlight: true },
          { name: "BGE Embeddings", level: "Proficient", highlight: false },
          { name: "Claude Code", level: "Proficient", highlight: false },
          { name: "MCP (Model Context Protocol)", level: "Exploring", highlight: true },
          { name: "Prompt Engineering", level: "Advanced", highlight: false }
        ]
      },
      {
        name: "Developer Tools & Cloud",
        items: [
          { name: "Git / GitHub", level: "Primary", highlight: false },
          { name: "Docker", level: "Proficient", highlight: true },
          { name: "AWS SageMaker", level: "Foundational", highlight: false },
          { name: "Microsoft Azure", level: "Foundational", highlight: false },
          { name: "MongoDB", level: "Proficient", highlight: false },
          { name: "Postman", level: "Proficient", highlight: false },
          { name: "Power BI", level: "Proficient", highlight: false },
          { name: "n8n Automation", level: "Intermediate", highlight: false }
        ]
      }
    ]
  },

  certifications: [
    {
      title: "AI Infrastructure and Operations Fundamentals",
      issuer: "NVIDIA",
      date: "Oct 2024",
      icon: "cpu"
    },
    {
      title: "Oracle Cloud Infrastructure Data Certified Foundations Associate",
      issuer: "Oracle",
      date: "Feb 2025",
      icon: "cloud"
    },
    {
      title: "Gemini for Application Developers",
      issuer: "Google Cloud Skills Boost",
      date: "Jun 2025",
      icon: "sparkles"
    },
    {
      title: "Gemini for Data Scientists and Analysts",
      issuer: "Google Cloud Skills Boost",
      date: "Jun 2025",
      icon: "brain"
    },
    {
      title: "Microsoft GitHub Copilot",
      issuer: "Microsoft",
      date: "Apr 2026",
      icon: "terminal"
    },
    {
      title: "Prompt Engineering for Everyone",
      issuer: "Cognitive Class",
      date: "Feb 2025",
      icon: "message"
    },
    {
      title: "Python: Mastering The Essentials",
      issuer: "Scaler",
      date: "Dec 2024",
      icon: "code"
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
      topic: "Hybrid Medical Image Segmentation",
      desc: "Extending research on breast ultrasound analysis toward 3D radiological feature fusion and bone tumor lesion classification."
    },
    {
      topic: "Evaluated RAG & Retrieval Diagnostics",
      desc: "Developing self-correcting retrieval architectures that compute confidence scores and rerank contexts to eliminate hallucinations."
    }
  ]
};
