export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  /** Visible label next to demo link */
  demoLabel?: string;
  category: string;
  highlights?: string[];
}

/** Selected Projects: agritech CV pipelines, UAV analytics, classical ML baseline, weather data engineering. */
export const projects: Project[] = [
  {
    id: 1,
    title: "Weather Data Engineering Pipeline",
    description:
      "Multi-database weather telemetry stack (Project Documentations) pairing a MongoDB raw lake, ClickHouse warehousing, Redis hot cache, Node/Express ingestion, and Chart.js KPI views for sub-second exploratory loads.",
    longDescription:
      "Engineered ingestion jobs that hydrate daily Open-Meteo (and compatible) slices into Mongo collections with schema-version tags, lineage metadata, and idempotent checkpoints. Promoted aggregates into ClickHouse materialized projections for percentile windows, anomalies, and cross-region deltas while Redis shields the dashboard API from repetitive warehouse hits. Operational notes, Docker compose targets, retention policies, and operator runbooks were captured alongside the coursework documentation set.",
    tech: ["Node.js", "MongoDB", "ClickHouse", "Redis", "Chart.js", "Python", "Docker", "REST APIs"],
    category: "Data Engineering",
    highlights: [
      "Incremental ETL with explicit lineage fields per ingestion batch",
      "Redis-backed query memoization targeting sub-second UX on heavy charts",
      "Multi-environment Docker layout for repeatable ClickHouse bootstrap",
      "365+ simulated production days exercised for compaction + GC validation",
      "Visualization layer documents drift checks between lake vs warehouse sums",
    ],
  },
  {
    id: 2,
    title: "Crop Monitoring & Maturity Detection",
    description:
      "Phase 1 report: custom convolutional backbone over drone-derived plantation imagery for harvest readiness scoring above 86% hold-out accuracy, with UAV capture discipline and preprocessing called out explicitly.",
    longDescription:
      "Authored crop surveillance workflow aligning DJI-derived orthomosaic tiles with plantation phenology checkpoints. Implemented GPU-native TensorFlow pipelines with tiling, glare suppression, augmentation (rotation, photometric jitter), and calibrated train/validation splits guarded by stratified cultivar quotas. Exported confusion-matrix diagnostics comparing early vs mature classes and documented ROC behavior for stakeholder review panels as captured in Project phase 1 report.",
    tech: ["Python", "CNN", "TensorFlow", "OpenCV", "Drone Imagery"],
    category: "Computer Vision",
    highlights: [
      "Drone acquisition checklist + radiometric normalization before CNN inputs",
      "Custom CNN classifier surpassing 86% accuracy with error analysis appendix",
      "Augmentation policy tuned against class imbalance captured in Phase 1 report",
      "Field validation notes aligning model scores with agronomist walkthroughs",
    ],
  },
  {
    id: 3,
    title: "On-Tree Areca Nut Fruit Maturity Detection",
    description:
      "Mini project report Spring 2022: DJI Mini SE mediated capture coupled with YOLOv5 for dense canopy occlusion, emphasizing deployment constraints and labeling taxonomy for staged maturity checkpoints.",
    longDescription:
      "Mini_Project_Report (3) distilled an end-to-end vision stack for spotting areca inflorescences among cluttered foliage. Implemented YOLOv5 training regimes with mosaic & mix-up policy, tiling for small fruit signatures, ONNX export readiness, and post-processing NMS tweaks for aerial jitter. Narrated failure cases (dense leaf overlap, low-light passes) alongside mitigation steps and harvest timing recommendations mirrored in aerial survey appendices.",
    tech: ["Python", "YOLOv5", "DJI Mini SE", "OpenCV", "Deep Learning"],
    category: "Computer Vision",
    highlights: [
      "Dataset protocol for altitudes, overlaps, and gimbal presets on DJI Mini SE",
      "Fine-tuned YOLO anchors for elongated nut clusters trapped in occlusion",
      "Edge-friendly export experimentation for constrained inference paths",
      "Spring 2022 mini project documentation with qualitative success stories",
    ],
  },
  {
    id: 4,
    title: "Pest Detection Using SVM",
    description:
      "mini_project_report (Fall 2022): handcrafted colour/texture cues feeding an RBF SVM separating healthy vs infected tea leaves for early scouting loops without heavy GPUs.",
    longDescription:
      "mini_project_report captured a reproducible preprocessing stack (Gaussian smoothing, LAB thresholding, leaf ROI extraction) paired with Histogram of Oriented Gradients-inspired texture vectors and PCA compression where applicable. Compared linear vs RBF kernels with grid-search gamma/C pairs, surfaced margin support vectors, and visualized confusion matrices highlighting false positives under monsoon-lit captures.",
    tech: ["Python", "SVM", "Scikit-learn", "OpenCV", "Image Processing"],
    category: "Computer Vision",
    highlights: [
      "Interpretable preprocessing chain documented for plantation partners",
      "Kernelized SVM outperforming logistic baselines on low-dimensional features",
      "Cross-validation regimen + precision/recall narratives for scouts",
      "Fall 2022 coursework mini report with illustrative failure thumbnails",
    ],
  },
];
