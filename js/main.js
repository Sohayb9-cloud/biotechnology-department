"use strict";

/* =========================================================
   BIOTECHNOLOGY DEPARTMENT WEBSITE
   GLOBAL JAVASCRIPT
   UNIVERSITY OF SAMARRA

   FULL BILINGUAL CURRICULUM SYSTEM
   ---------------------------------------------------------
   English ↔ Arabic
   LTR ↔ RTL

   TOTAL CURRICULUM SUBJECTS: 22

   01  Medicinal Plants
   02  Analytical Chemistry
   03  Organic Chemistry
   04  Biochemistry
   05  Nanotechnology
   06  Cell Biology
   07  Histological Preparations
   08  Immunology
   09  Genetics
   10  Cytogenetics
   11  Plant Biotechnology
   12  Genetic Engineering
   13  Principles of Biotechnology
   14  Molecular Biology
   15  Mycology
   16  Phycology / Algology
   17  Microbiology
   18  Antibiotics
   19  Hematology
   20  Bioinformatics
   21  Physiology
   22  Biofertilizers

   Visual Learning:
   All 22 subjects → 2 images per subject (44 total)

/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));


/* =========================================================
   LANGUAGE
   ========================================================= */

let currentLanguage =
    document.documentElement.lang === "ar"
        ? "ar"
        : "en";


/* =========================================================
   ACTIVE SUBJECT
   ========================================================= */

let activeSubjectNumber = null;


/* =========================================================
   SUBJECT DATABASE
   ========================================================= */

const SUBJECTS = {

    /* =====================================================
       01 — MEDICINAL PLANTS
       ===================================================== */

    "01": {
        title: "Medicinal Plants",
        icon: "leaf",

        summary:
            "Medicinal plants are biological sources of chemically diverse natural products. This course examines the plants, tissues and specialized metabolites associated with their biological and medicinal value.",

        overview:
            "Medicinal Plants examines plants used as sources of biologically active natural products, with emphasis on their botanical identity, the distribution of compounds within plant organs and tissues, and the chemistry of major specialized metabolites. The course considers alkaloids, phenolic compounds, flavonoids and terpenoids, together with their biosynthetic origins and biological activities. It also introduces the principles of extracting and characterizing plant-derived compounds and the use of plant tissue culture for controlled propagation, conservation and production of valuable metabolites.",

        topics: [
            "Medicinal plant identification and diversity",
            "Plant organs and tissues as sources of bioactive compounds",
            "Primary and specialized metabolism",
            "Alkaloids, phenolics, flavonoids and terpenoids",
            "Biosynthesis of specialized metabolites",
            "Extraction and characterization of natural products",
            "Evaluation of biological activity",
            "Plant tissue culture and metabolite production"
        ],

        connection:
            "Connects plant biology and phytochemistry with natural-product biotechnology, tissue culture, metabolite production and investigation of biologically active compounds.",

        visuals: [
            {
                src:
                    "assets/medicinal-plants/medical-plants-journey.png",

                alt:
                    "Scientific pathway connecting medicinal plants, plant tissues, specialized metabolites, extraction and biological activity.",

                altAr:
                    "رسم علمي يوضح Medicinal Plants ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting medicinal plants, plant tissues, specialized metabolites, extraction and biological activity.",

                captionAr:
                    "Medicinal Plants — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/medicinal-plants/medical-plants-visual-pack.png",

                alt:
                    "Integrated visual overview of medicinal plants, phytochemicals and natural-product biotechnology.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Medicinal Plants وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of medicinal plants, phytochemicals and natural-product biotechnology.",

                captionAr:
                    "Medicinal Plants — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-01",

        ar: {
            title: "النباتات الطبية",

            summary:
                "النباتات الطبية مصادر حيوية لمركبات طبيعية متنوعة كيميائيًا، ويدرس هذا المقرر النباتات وأنسجتها ومستقلباتها المتخصصة المرتبطة بقيمتها الحيوية والطبية.",

            overview:
                "يدرس مقرر النباتات الطبية الأنواع النباتية المستخدمة كمصادر للمركبات الطبيعية الفعالة حيويًا، مع التركيز على تشخيصها النباتي وتوزيع المركبات في الأعضاء والأنسجة النباتية وكيمياء أهم المستقلبات المتخصصة. ويتناول المقرر القلويدات والمركبات الفينولية والفلافونويدات والتربينويدات وأصولها التخليقية الحيوية ونشاطاتها البيولوجية، إضافة إلى مبادئ استخلاص المركبات النباتية وتوصيفها واستخدام زراعة الأنسجة النباتية للإكثار المنضبط والحفظ وإنتاج المستقلبات ذات القيمة الحيوية.",

            topics: [
                "تشخيص النباتات الطبية وتنوعها",
                "الأعضاء والأنسجة النباتية كمصادر للمركبات الفعالة حيويًا",
                "الأيض الأولي والأيض المتخصص",
                "القلويدات والمركبات الفينولية والفلافونويدات والتربينويدات",
                "التخليق الحيوي للمستقلبات المتخصصة",
                "استخلاص المنتجات الطبيعية وتوصيفها",
                "تقييم النشاط الحيوي",
                "زراعة الأنسجة النباتية وإنتاج المستقلبات"
            ],

            connection:
                "يربط المقرر علم النبات والكيمياء النباتية بتقانة المنتجات الطبيعية وزراعة الأنسجة وإنتاج المستقلبات ودراسة المركبات ذات النشاط الحيوي."
        }
    },


    /* =====================================================
       02 — ANALYTICAL CHEMISTRY
       ===================================================== */

    "02": {
        title: "Analytical Chemistry",
        icon: "flask",

        summary:
            "Analytical Chemistry provides the principles required to identify, separate and quantitatively measure chemical substances in biological and non-biological samples.",

        overview:
            "Analytical Chemistry focuses on obtaining reliable information about the identity, composition and concentration of chemical substances. The course develops the principles of qualitative and quantitative analysis and follows the analytical process from sampling and sample preparation to measurement and interpretation. It covers chemical equilibrium, volumetric analysis, calibration and quantitative determination together with instrumental approaches such as spectroscopy and chromatography. Emphasis is placed on the relationship between analytical method, measured signal and the reliability of the resulting data.",

        topics: [
            "Principles of analytical measurement",
            "Qualitative and quantitative analysis",
            "Chemical equilibrium and analytical reactions",
            "Volumetric and titrimetric analysis",
            "Calibration and quantitative determination",
            "Sample preparation",
            "Chromatographic separation",
            "Spectroscopic analysis"
        ],

        connection:
            "Supports biotechnology through chemical analysis of biomolecules, metabolites, biological samples, pharmaceutical products and experimental materials.",

        visuals: [
            {
                src:
                    "assets/analytical-chemistry/analytical-chemistry-journey.png",

                alt:
                    "Scientific workflow linking sampling, preparation, analytical measurement, separation and interpretation of chemical data.",

                altAr:
                    "رسم علمي يوضح Analytical Chemistry ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific workflow linking sampling, preparation, analytical measurement, separation and interpretation of chemical data.",

                captionAr:
                    "Analytical Chemistry — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/analytical-chemistry/analytical-chemistry-visual-pack.png",

                alt:
                    "Integrated visual overview of analytical methods, instruments, signals and quantitative chemical analysis.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Analytical Chemistry وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of analytical methods, instruments, signals and quantitative chemical analysis.",

                captionAr:
                    "Analytical Chemistry — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-02",

        ar: {
            title: "الكيمياء التحليلية",

            summary:
                "تقدم الكيمياء التحليلية المبادئ اللازمة لتحديد المواد الكيميائية وفصلها وقياس تراكيزها كميًا في العينات الحيوية وغير الحيوية.",

            overview:
                "تركز الكيمياء التحليلية على الحصول على معلومات موثوقة عن هوية المواد الكيميائية وتركيبها وتراكيزها. ويطور المقرر مبادئ التحليل النوعي والكمي ويتتبع العملية التحليلية من أخذ العينات وتحضيرها إلى القياس وتفسير النتائج. كما يتناول الاتزان الكيميائي والتحليل الحجمي والمعايرات والتعيين الكمي، إلى جانب التقنيات الآلية مثل التحليل الطيفي والكروماتوغرافيا، مع التركيز على العلاقة بين الطريقة التحليلية والإشارة المقاسة وموثوقية البيانات الناتجة.",

            topics: [
                "مبادئ القياس التحليلي",
                "التحليل النوعي والكمي",
                "الاتزان الكيميائي والتفاعلات التحليلية",
                "التحليل الحجمي والمعايرة",
                "المعايرة والتعيين الكمي",
                "تحضير العينات",
                "الفصل الكروماتوغرافي",
                "التحليل الطيفي"
            ],

            connection:
                "يدعم المقرر تطبيقات التقانات الحيوية في تحليل الجزيئات الحيوية والمستقلبات والعينات البيولوجية والمستحضرات الدوائية والمواد التجريبية."
        }
    },


    /* =====================================================
       03 — ORGANIC CHEMISTRY
       ===================================================== */

    "03": {
        title: "Organic Chemistry",
        icon: "molecule",

        summary:
            "Organic Chemistry explains how carbon-containing molecules are structured, how their functional groups determine chemical behavior, and how organic reactions transform them.",

        overview:
            "Organic Chemistry examines the structure, bonding, stereochemistry, physical properties and chemical reactivity of carbon-containing compounds. The course develops the relationship between molecular structure, functional groups and chemical behavior and introduces the mechanisms of major organic reactions. It covers important classes of organic compounds and establishes the chemical principles required to understand biologically relevant molecules, metabolites, natural products and pharmaceutical compounds.",

        topics: [
            "Carbon bonding and molecular structure",
            "Hydrocarbons",
            "Functional groups",
            "Structural and stereoisomerism",
            "Organic reaction mechanisms",
            "Alcohols and ethers",
            "Carbonyl compounds and carboxylic acids",
            "Biologically relevant organic compounds"
        ],

        connection:
            "Provides the chemical foundation for understanding biomolecules, metabolites, pharmaceuticals, natural products and biochemical transformations.",

        visuals: [
            {
                src:
                    "assets/organic-chemistry/organic-chemistry-journey.png",

                alt:
                    "Scientific pathway from carbon skeletons and functional groups to organic reactions and molecular products.",

                altAr:
                    "رسم علمي يوضح Organic Chemistry ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway from carbon skeletons and functional groups to organic reactions and molecular products.",

                captionAr:
                    "Organic Chemistry — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/organic-chemistry/organic-chemistry-visual-pack.png",

                alt:
                    "Integrated visual overview of hydrocarbons, functional groups, structures and molecular reactivity.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Organic Chemistry وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of hydrocarbons, functional groups, structures and molecular reactivity.",

                captionAr:
                    "Organic Chemistry — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-03",

        ar: {
            title: "الكيمياء العضوية",

            summary:
                "تفسر الكيمياء العضوية كيفية بناء الجزيئات المحتوية على الكربون، وكيف تحدد مجاميعها الوظيفية سلوكها الكيميائي، وكيف تتحول من خلال التفاعلات العضوية.",

            overview:
                "تدرس الكيمياء العضوية بنية المركبات المحتوية على الكربون وروابطها وتصاوغها وخصائصها الفيزيائية وتفاعليتها الكيميائية. ويطور المقرر العلاقة بين البنية الجزيئية والمجاميع الوظيفية والسلوك الكيميائي، ويتناول آليات أهم التفاعلات العضوية. كما يدرس أصنافًا رئيسية من المركبات العضوية ويوفر الأساس الكيميائي لفهم الجزيئات ذات الأهمية الحيوية والمستقلبات والمنتجات الطبيعية والمركبات الدوائية.",

            topics: [
                "روابط الكربون والبنية الجزيئية",
                "الهيدروكربونات",
                "المجاميع الوظيفية",
                "التصاوغ البنيوي والفراغي",
                "آليات التفاعلات العضوية",
                "الكحولات والإيثرات",
                "مركبات الكربونيل والأحماض الكربوكسيلية",
                "المركبات العضوية ذات الأهمية الحيوية"
            ],

            connection:
                "يوفر المقرر الأساس الكيميائي لفهم الجزيئات الحيوية والمستقلبات والمركبات الدوائية والمنتجات الطبيعية والتحولات الكيميائية الحيوية."
        }
    },


    /* =====================================================
       04 — BIOCHEMISTRY
       ===================================================== */

    "04": {
        title: "Biochemistry",
        icon: "dna",

        summary:
            "Biochemistry investigates the molecules and chemical reactions that constitute living systems and support cellular function.",

        overview:
            "Biochemistry examines the molecular composition of living systems and the chemical reactions that maintain cellular function. The course focuses on the structures and properties of proteins, carbohydrates, lipids and nucleic acids and relates their molecular organization to biological function. It also covers enzyme catalysis and regulation, bioenergetics and the major pathways through which cells transform matter and energy. The course emphasizes the integration of individual biochemical reactions into coordinated metabolic systems.",

        topics: [
            "Biological molecules and their properties",
            "Amino acids and proteins",
            "Protein structure and function",
            "Enzymes and catalytic mechanisms",
            "Carbohydrates and carbohydrate metabolism",
            "Lipids and lipid metabolism",
            "Nucleotides and nucleic acids",
            "Bioenergetics and ATP",
            "Integrated metabolic pathways"
        ],

        connection:
            "Provides a core foundation for molecular biotechnology, enzyme technology, fermentation, metabolic engineering, diagnostics and biomedical applications.",

        visuals: [
            {
                src:
                    "assets/biochemistry/biochemistry-journey.png",

                alt:
                    "Scientific pathway linking biomolecules, enzymes, metabolic reactions and cellular biochemical networks.",

                altAr:
                    "رسم علمي يوضح Biochemistry ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway linking biomolecules, enzymes, metabolic reactions and cellular biochemical networks.",

                captionAr:
                    "Biochemistry — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/biochemistry/biochemistry-visual-pack.png",

                alt:
                    "Integrated visual overview of proteins, carbohydrates, lipids, nucleic acids and metabolic processes.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Biochemistry وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of proteins, carbohydrates, lipids, nucleic acids and metabolic processes.",

                captionAr:
                    "Biochemistry — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-04",

        ar: {
            title: "الكيمياء الحيوية",

            summary:
                "تبحث الكيمياء الحيوية في الجزيئات والتفاعلات الكيميائية التي تكوّن الأنظمة الحية وتحافظ على وظائف الخلايا.",

            overview:
                "تدرس الكيمياء الحيوية التركيب الجزيئي للأنظمة الحية والتفاعلات الكيميائية التي تحافظ على وظيفة الخلية. ويركز المقرر على بنية وخصائص البروتينات والكربوهيدرات والدهون والأحماض النووية وعلاقة تنظيمها الجزيئي بوظيفتها البيولوجية. كما يتناول التحفيز الإنزيمي وتنظيم التفاعلات الكيميائية الحيوية والطاقة الحيوية والمسارات الرئيسية التي تحول من خلالها الخلايا المادة والطاقة، مع التأكيد على تكامل التفاعلات الفردية ضمن شبكات أيضية منسقة.",

            topics: [
                "الجزيئات الحيوية وخصائصها",
                "الأحماض الأمينية والبروتينات",
                "بنية البروتين ووظيفته",
                "الإنزيمات وآليات التحفيز",
                "الكربوهيدرات وأيضها",
                "الدهون وأيضها",
                "النيوكليوتيدات والأحماض النووية",
                "الطاقة الحيوية وATP",
                "المسارات الأيضية المتكاملة"
            ],

            connection:
                "يشكل المقرر أساسًا محوريًا للتقانة الحيوية الجزيئية وتقانات الإنزيمات والتخمير والهندسة الأيضية والتشخيص والتطبيقات الطبية الحيوية."
        }
    },


    /* =====================================================
       05 — NANOTECHNOLOGY
       ===================================================== */

    "05": {
        title: "Nanotechnology",
        icon: "nanotech",

        summary:
            "Nanotechnology examines materials and structures at dimensions where size-dependent properties become important for biological and technological applications.",

        overview:
            "Nanotechnology studies materials and structures at the nanoscale and examines how changes in size, surface properties, composition and molecular organization influence their behavior. The course introduces nanomaterials, nanoparticles and their characteristic physical and chemical properties, together with principles governing their interaction with biological systems. Particular emphasis is given to nanobiotechnology applications such as biosensors, molecular delivery, imaging and biomedical materials.",

        topics: [
            "The nanoscale and size-dependent properties",
            "Nanomaterials and nanostructures",
            "Nanoparticle properties and surface characteristics",
            "Preparation and characterization of nanomaterials",
            "Nano–bio interactions",
            "Nanobiosensors",
            "Molecular and drug delivery",
            "Nanomedicine and biomedical applications"
        ],

        connection:
            "Links nanoscale science with biotechnology through biosensing, molecular delivery, imaging, diagnostics and biomaterial development.",

        visuals: [
            {
                src:
                    "assets/nanotechnology/nanotechnology-journey.png",

                alt:
                    "Scientific pathway from nanoscale materials and properties to nano–bio interactions and biotechnology applications.",

                altAr:
                    "رسم علمي يوضح Nanotechnology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway from nanoscale materials and properties to nano–bio interactions and biotechnology applications.",

                captionAr:
                    "Nanotechnology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/nanotechnology/nanotechnology-visual-pack.png",

                alt:
                    "Integrated visual overview of nanoparticles, interfaces, characterization and nanobiotechnology applications.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Nanotechnology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of nanoparticles, interfaces, characterization and nanobiotechnology applications.",

                captionAr:
                    "Nanotechnology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-05",

        ar: {
            title: "تقانة النانو",

            summary:
                "تدرس تقانة النانو المواد والبنى عند أبعاد تصبح فيها الخصائص المرتبطة بالحجم مهمة للتطبيقات الحيوية والتقنية.",

            overview:
                "تدرس تقانة النانو المواد والبنى عند المقياس النانوي، وتبحث في كيفية تأثير الحجم وخصائص السطح والتركيب والتنظيم الجزيئي في سلوك هذه المواد. ويقدم المقرر المواد النانوية والجسيمات النانوية وخصائصها الفيزيائية والكيميائية المميزة، إلى جانب المبادئ التي تحكم تفاعلها مع الأنظمة البيولوجية. ويركز بصورة خاصة على تطبيقات التقانة الحيوية النانوية مثل المستشعرات الحيوية والتوصيل الجزيئي والتصوير والمواد الطبية الحيوية.",

            topics: [
                "المقياس النانوي والخصائص المعتمدة على الحجم",
                "المواد والبنى النانوية",
                "خصائص الجسيمات النانوية وخصائص أسطحها",
                "تحضير المواد النانوية وتوصيفها",
                "التفاعلات بين النانو والأنظمة الحيوية",
                "المستشعرات الحيوية النانوية",
                "التوصيل الجزيئي والدوائي",
                "الطب النانوي والتطبيقات الطبية الحيوية"
            ],

            connection:
                "يربط المقرر علم المقياس النانوي بالتقانات الحيوية من خلال الاستشعار الحيوي والتوصيل الجزيئي والتصوير والتشخيص وتطوير المواد الحيوية."
        }
    },


    /* =====================================================
       06 — CELL BIOLOGY
       ===================================================== */

    "06": {
        title: "Cell Biology",
        icon: "cell",

        summary:
            "Cell Biology examines the organization, function, communication and regulated processes of cells as the fundamental units of life.",

        overview:
            "Cell Biology examines the cell as an organized biological system in which specialized structures perform coordinated functions. The course covers cell architecture, membrane structure and transport, organelles, intracellular organization, cytoskeletal systems, cellular communication and signaling, and the regulation of cell growth and division. It emphasizes the relationship between cellular structure and function and the coordination of cellular processes required for maintaining cellular stability and responding to environmental changes.",

        topics: [
            "Cell theory and cellular organization",
            "Prokaryotic and eukaryotic cells",
            "Plasma membrane structure and transport",
            "Organelles and intracellular compartments",
            "Cytoskeleton and intracellular movement",
            "Cell signaling and communication",
            "Cell cycle and cell division",
            "Cellular interactions and homeostasis",
            "Regulated cell death"
        ],

        connection:
            "Provides essential foundations for tissue culture, cellular analysis, regenerative biotechnology, molecular biology and biomedical biotechnology.",

        visuals: [
            {
                src:
                    "assets/cell-biology/cell-biology-journey.png",

                alt:
                    "Scientific pathway connecting cell structure, organelles, membranes, signaling and cellular processes.",

                altAr:
                    "رسم علمي يوضح Cell Biology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting cell structure, organelles, membranes, signaling and cellular processes.",

                captionAr:
                    "Cell Biology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/cell-biology/cell-biology-visual-pack.png",

                alt:
                    "Integrated visual overview of cellular organization, transport, communication and division.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Cell Biology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of cellular organization, transport, communication and division.",

                captionAr:
                    "Cell Biology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-06",

        ar: {
            title: "علم الأحياء الخلوي",

            summary:
                "يدرس علم الأحياء الخلوي تنظيم الخلايا ووظائفها واتصالها والعمليات المنظمة التي تقوم بها بوصفها الوحدات الأساسية للحياة.",

            overview:
                "يدرس علم الأحياء الخلوي الخلية بوصفها نظامًا بيولوجيًا منظمًا تؤدي فيه البنى المتخصصة وظائف متكاملة. ويتناول المقرر بنية الخلية والغشاء والنقل والعضيات والتنظيم الداخلي والهيكل الخلوي والاتصال والإشارات الخلوية وتنظيم نمو الخلية وانقسامها. ويركز على العلاقة بين البنية والوظيفة وعلى تنسيق العمليات الخلوية الضرورية للحفاظ على الاستقرار الداخلي والاستجابة للتغيرات في البيئة الخلوية.",

            topics: [
                "نظرية الخلية والتنظيم الخلوي",
                "الخلايا بدائية النوى وحقيقية النوى",
                "بنية الغشاء البلازمي والنقل",
                "العضيات والحجرات داخل الخلية",
                "الهيكل الخلوي والحركة داخل الخلية",
                "الإشارات والاتصال الخلوي",
                "دورة الخلية وانقسامها",
                "التفاعلات الخلوية والاستتباب",
                "الموت الخلوي المنظم"
            ],

            connection:
                "يوفر المقرر الأساس لزراعة الأنسجة والتحليل الخلوي والتقانة الحيوية التجديدية وعلم الأحياء الجزيئي والتقانة الحيوية الطبية."
        }
    },


    /* =====================================================
       07 — HISTOLOGICAL PREPARATIONS
       ===================================================== */

    "07": {
        title: "Histological Preparations",
        icon: "microscope",

        summary:
            "Histological preparation converts biological tissues into preserved microscopic specimens suitable for examining cellular and tissue architecture.",

        overview:
            "Histological Preparations focuses on the laboratory processing of biological tissues for microscopic examination while preserving their cellular and structural organization. The course covers fixation, dehydration, clearing, embedding, sectioning and staining and explains how each stage affects tissue preservation and microscopic appearance. It also introduces the principles of routine histological staining and microscopic observation for the examination of tissue structure and cellular organization.",

        topics: [
            "Tissue preservation and fixation",
            "Dehydration and clearing",
            "Embedding and tissue orientation",
            "Sectioning and microtomy",
            "Routine histological staining",
            "Special staining principles",
            "Microscopic examination",
            "Recognition of tissue architecture"
        ],

        connection:
            "Supports microscopy, tissue biology, histological analysis, tissue culture and laboratory-based biological research.",

        visuals: [
            {
                src:
                    "assets/histological-preparations/histological-preparations-journey.png",

                alt:
                    "Scientific workflow showing fixation, processing, embedding, sectioning, staining and microscopic examination.",

                altAr:
                    "رسم علمي يوضح Histological Preparations ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific workflow showing fixation, processing, embedding, sectioning, staining and microscopic examination.",

                captionAr:
                    "Histological Preparations — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/histological-preparations/histological-preparations-visual-pack.png",

                alt:
                    "Integrated visual overview of tissue preparation and microscopic analysis of cellular architecture.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Histological Preparations وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of tissue preparation and microscopic analysis of cellular architecture.",

                captionAr:
                    "Histological Preparations — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-07",

        ar: {
            title: "التحضيرات النسيجية",

            summary:
                "تحول التحضيرات النسيجية الأنسجة البيولوجية إلى نماذج مجهرية محفوظة يمكن من خلالها فحص البنية الخلوية والنسيجية.",

            overview:
                "يركز مقرر التحضيرات النسيجية على المعالجة المختبرية للأنسجة البيولوجية لإعدادها للفحص المجهري مع الحفاظ قدر الإمكان على تنظيمها الخلوي والنسجي. ويتناول التثبيت ونزع الماء والتصفية والتضمين والتقطيع والصبغ، ويشرح تأثير كل مرحلة في حفظ النسيج ومظهره المجهري. كما يقدم مبادئ الصبغات النسيجية الروتينية والفحص المجهري لدراسة بنية الأنسجة وتنظيم الخلايا.",

            topics: [
                "حفظ الأنسجة وتثبيتها",
                "نزع الماء والتصفية",
                "التضمين وتوجيه النسيج",
                "التقطيع والقطع المجهري",
                "الصبغات النسيجية الروتينية",
                "مبادئ الصبغات الخاصة",
                "الفحص المجهري",
                "تمييز البنية النسيجية"
            ],

            connection:
                "يدعم المقرر المجهرية وعلم الأنسجة والتحليل النسيجي وزراعة الأنسجة والبحث البيولوجي المختبري."
        }
    },


    /* =====================================================
       08 — IMMUNOLOGY
       ===================================================== */

    "08": {
        title: "Immunology",
        icon: "antibody",

        summary:
            "Immunology examines how biological systems recognize foreign and altered components and coordinate innate and adaptive immune responses.",

        overview:
            "Immunology examines the cellular and molecular mechanisms responsible for immune recognition, activation and regulation. The course covers innate and adaptive immunity, immune cells, antigens, antibodies, antigen presentation, complement and cytokine-mediated communication. It also addresses the mechanisms that regulate immune responses and maintain tolerance to self. The subject establishes the scientific basis for understanding host defense and major immune-based technologies.",

        topics: [
            "Organization of the immune system",
            "Innate immunity",
            "Adaptive immunity",
            "B lymphocytes and antibodies",
            "T lymphocytes and cellular immunity",
            "Antigens and antigen recognition",
            "Antigen presentation",
            "Complement and cytokine signaling",
            "Immune regulation and tolerance"
        ],

        connection:
            "Supports vaccine development, immunodiagnostics, antibody-based biotechnology, therapeutic biotechnology and biomedical research.",

        visuals: [
            {
                src:
                    "assets/immunology/immunology-journey.png",

                alt:
                    "Scientific pathway connecting innate and adaptive immunity, antigen recognition, antibodies and immune signaling.",

                altAr:
                    "رسم علمي يوضح Immunology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting innate and adaptive immunity, antigen recognition, antibodies and immune signaling.",

                captionAr:
                    "Immunology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/immunology/immunology-visual-pack.png",

                alt:
                    "Integrated visual overview of immune cells, antigen presentation, antibodies and coordinated immune responses.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Immunology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of immune cells, antigen presentation, antibodies and coordinated immune responses.",

                captionAr:
                    "Immunology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-08",

        ar: {
            title: "علم المناعة",

            summary:
                "يدرس علم المناعة كيفية تعرف الأنظمة البيولوجية على المكونات الغريبة أو المتغيرة وكيف تنسق الاستجابات المناعية الفطرية والمكتسبة.",

            overview:
                "يدرس علم المناعة الآليات الخلوية والجزيئية المسؤولة عن التعرف المناعي والتنشيط والتنظيم. ويتناول المناعة الفطرية والمكتسبة والخلايا المناعية والمستضدات والأجسام المضادة وعرض المستضدات ونظام المتممة والاتصال بوساطة السيتوكينات. كما يدرس الآليات التي تنظم الاستجابة المناعية وتحافظ على التحمل المناعي تجاه مكونات الذات، ويؤسس لفهم دفاعات العائل والتقانات القائمة على المناعة.",

            topics: [
                "تنظيم الجهاز المناعي",
                "المناعة الفطرية",
                "المناعة المكتسبة",
                "الخلايا اللمفاوية البائية والأجسام المضادة",
                "الخلايا اللمفاوية التائية والمناعة الخلوية",
                "المستضدات والتعرف المناعي",
                "عرض المستضدات",
                "المتممة والإشارات السيتوكينية",
                "تنظيم المناعة والتحمل المناعي"
            ],

            connection:
                "يدعم المقرر تطوير اللقاحات والتشخيصات المناعية والتقانة القائمة على الأجسام المضادة والتقانة الحيوية العلاجية والبحوث الطبية الحيوية."
        }
    },


    /* =====================================================
       09 — GENETICS
       ===================================================== */

    "09": {
        title: "Genetics",
        icon: "dna",

        summary:
            "Genetics explains how hereditary information is organized, transmitted and altered, providing the foundation for understanding biological variation.",

        overview:
            "Genetics examines heredity and genetic variation and explains how biological information is transmitted from one generation to the next. The course develops the principles of genes, alleles, chromosomes, genotype and phenotype and introduces Mendelian inheritance and its extensions. It also covers genetic linkage, recombination, mutation and the origin of heritable variation. The emphasis is on the principles governing transmission and variation of genetic information rather than on detailed molecular mechanisms of gene expression.",

        topics: [
            "Genes and alleles",
            "Chromosomes and genetic organization",
            "Genotype and phenotype",
            "Mendelian inheritance",
            "Segregation and independent assortment",
            "Extensions of Mendelian inheritance",
            "Genetic linkage and recombination",
            "Mutation and genetic variation",
            "Inheritance patterns"
        ],

        connection:
            "Provides the conceptual foundation for genome analysis, genetic diagnostics, breeding, molecular genetics and genetic engineering.",

        visuals: [
            {
                src:
                    "assets/genetics/genetics-journey.png",

                alt:
                    "Scientific pathway linking genes, alleles, chromosomes, inheritance, recombination and genetic variation.",

                altAr:
                    "رسم علمي يوضح Genetics ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway linking genes, alleles, chromosomes, inheritance, recombination and genetic variation.",

                captionAr:
                    "Genetics — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/genetics/genetics-visual-pack.png",

                alt:
                    "Integrated visual overview of inheritance patterns, genetic variation and chromosome-level organization.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Genetics وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of inheritance patterns, genetic variation and chromosome-level organization.",

                captionAr:
                    "Genetics — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-09",

        ar: {
            title: "علم الوراثة",

            summary:
                "يفسر علم الوراثة كيفية تنظيم المعلومات الوراثية وانتقالها وتغيرها، ويشكل الأساس لفهم التنوع البيولوجي.",

            overview:
                "يدرس علم الوراثة الوراثة والتنوع الوراثي ويوضح كيفية انتقال المعلومات البيولوجية من جيل إلى آخر. ويطور المقرر مفاهيم الجينات والأليلات والكروموسومات والنمط الجيني والنمط الظاهري، ويتناول مبادئ الوراثة المندلية وامتداداتها. كما يشمل الارتباط الوراثي وإعادة التركيب والطفرات ومصادر التباين القابل للتوارث، مع التركيز على المبادئ التي تحكم انتقال المعلومات الوراثية وتنوعها.",

            topics: [
                "الجينات والأليلات",
                "الكروموسومات والتنظيم الوراثي",
                "النمط الجيني والنمط الظاهري",
                "الوراثة المندلية",
                "الانعزال والتوزيع المستقل",
                "امتدادات الوراثة المندلية",
                "الارتباط الوراثي وإعادة التركيب",
                "الطفرات والتنوع الوراثي",
                "أنماط التوارث"
            ],

            connection:
                "يوفر المقرر الأساس المفاهيمي لتحليل الجينوم والتشخيص الوراثي والتربية وعلم الوراثة الجزيئي والهندسة الوراثية."
        }
    },


    /* =====================================================
       10 — CYTOGENETICS
       ===================================================== */

    "10": {
        title: "Cytogenetics",
        icon: "chromosome",

        summary:
            "Cytogenetics is the branch of genetics concerned with chromosome structure, organization, function and abnormalities at the cellular level.",

        overview:
            "Cytogenetics is a branch of genetics that focuses on the structure, organization, function and abnormalities of chromosomes at the cellular level. The course examines chromosomes through cytological and cytogenetic approaches and considers the identification of numerical and structural abnormalities, including chromosome loss or gain, deletions, duplications, inversions and translocations. It also introduces chromosome analysis and karyotyping and explains the relevance of chromosomal abnormalities to hereditary disorders, reproductive abnormalities and neoplastic diseases, including certain cancers.",

        topics: [
            "Chromosome structure and organization",
            "Chromosome number and karyotype",
            "Chromosome identification and banding",
            "Numerical chromosome abnormalities",
            "Structural chromosome abnormalities",
            "Deletions and duplications",
            "Inversions and translocations",
            "Cytogenetic analysis of biological specimens",
            "Cytogenetics in hereditary disorders",
            "Cytogenetics in cancer"
        ],

        connection:
            "Provides chromosome-level analytical concepts relevant to genetic diagnosis, chromosome characterization, reproductive genetics, cancer cytogenetics and investigation of chromosomal abnormalities.",

        visuals: [
            {
                src:
                    "assets/cytogenetics/cytogenetics-journey.png",

                alt:
                    "Scientific workflow connecting chromosomes, karyotyping, banding and numerical or structural abnormalities.",

                altAr:
                    "رسم علمي يوضح Cytogenetics ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific workflow connecting chromosomes, karyotyping, banding and numerical or structural abnormalities.",

                captionAr:
                    "Cytogenetics — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/cytogenetics/cytogenetics-visual-pack.png",

                alt:
                    "Integrated visual overview of chromosome analysis and clinically relevant cytogenetic abnormalities.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Cytogenetics وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of chromosome analysis and clinically relevant cytogenetic abnormalities.",

                captionAr:
                    "Cytogenetics — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-10",

        ar: {
            title: "علم الوراثة الخلوي",

            summary:
                "علم الوراثة الخلوي هو فرع من علم الوراثة يختص بدراسة بنية الكروموسومات وتنظيمها ووظيفتها واضطراباتها على المستوى الخلوي.",

            overview:
                "علم الوراثة الخلوي هو فرع من علم الوراثة يركز على دراسة بنية الكروموسومات وتنظيمها ووظيفتها واضطراباتها على المستوى الخلوي. ويتناول المقرر دراسة الكروموسومات باستخدام الأساليب الخلوية والوراثية الخلوية، مع التركيز على الكشف عن الاضطرابات العددية والبنيوية، بما في ذلك فقدان الكروموسومات أو زيادتها والحذوفات والتضاعفات والانقلابات والانتقالات. كما يقدم مبادئ تحليل الكروموسومات والنمط النووي، ويشرح أهمية الاضطرابات الكروموسومية في الأمراض الوراثية واضطرابات التكاثر والأمراض الورمية، بما في ذلك بعض أنواع السرطان.",

            topics: [
                "بنية الكروموسومات وتنظيمها",
                "عدد الكروموسومات والنمط النووي",
                "التعرف على الكروموسومات وتقنيات الحزم",
                "الاضطرابات الكروموسومية العددية",
                "الاضطرابات الكروموسومية البنيوية",
                "الحذوفات والتضاعفات",
                "الانقلابات والانتقالات الكروموسومية",
                "التحليل الوراثي الخلوي للعينات البيولوجية",
                "علم الوراثة الخلوي في الاضطرابات الوراثية",
                "علم الوراثة الخلوي في السرطان"
            ],

            connection:
                "يوفر المقرر مفاهيم تحليلية على مستوى الكروموسوم ذات أهمية للتشخيص الوراثي وتوصيف الكروموسومات وعلم الوراثة التناسلي وعلم الوراثة الخلوي للسرطان ودراسة الاضطرابات الكروموسومية."
        }
    },


    /* =====================================================
       11 — PLANT BIOTECHNOLOGY
       ===================================================== */

    "11": {
        title: "Plant Biotechnology",
        icon: "plant",

        summary:
            "Plant Biotechnology applies cellular and molecular techniques to the controlled propagation, conservation and modification of plant systems.",

        overview:
            "Plant Biotechnology applies biological and molecular principles to the propagation, conservation, modification and utilization of plants. The course covers plant cell and tissue culture, cellular totipotency, culture conditions, micropropagation, regeneration and organ formation, together with principles of plant transformation. It also examines the use of controlled culture systems for conserving plant genetic resources and producing valuable plant-derived compounds.",

        topics: [
            "Plant cells and tissues",
            "Cellular totipotency",
            "Aseptic culture principles",
            "Culture media and plant growth regulators",
            "Callus and cell cultures",
            "Micropropagation",
            "Organogenesis and regeneration",
            "Plant transformation",
            "Production of specialized metabolites"
        ],

        connection:
            "Supports plant propagation, conservation, genetic transformation, crop improvement and production of valuable plant-derived compounds.",

        visuals: [
            {
                src:
                    "assets/plant-biotechnology/plant-biotechnology-journey.png",

                alt:
                    "Scientific pathway from plant cells and tissues through tissue culture, regeneration and biotechnology applications.",

                altAr:
                    "رسم علمي يوضح Plant Biotechnology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway from plant cells and tissues through tissue culture, regeneration and biotechnology applications.",

                captionAr:
                    "Plant Biotechnology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/plant-biotechnology/plant-biotechnology-visual-pack.png",

                alt:
                    "Integrated visual overview of micropropagation, plant tissue culture and applied plant biotechnology.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Plant Biotechnology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of micropropagation, plant tissue culture and applied plant biotechnology.",

                captionAr:
                    "Plant Biotechnology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-11",

        ar: {
            title: "التقانة الحيوية النباتية",

            summary:
                "تطبق التقانة الحيوية النباتية التقنيات الخلوية والجزيئية للإكثار المنضبط للنباتات وحفظها وتعديلها.",

            overview:
                "تطبق التقانة الحيوية النباتية المبادئ البيولوجية والجزيئية في إكثار النباتات وحفظها وتعديلها واستثمارها. ويغطي المقرر زراعة الخلايا والأنسجة النباتية ومفهوم القدرة الكلية للخلايا وشروط الزراعة والإكثار الدقيق والتجدد وتكوين الأعضاء، إلى جانب مبادئ التحويل الوراثي للنباتات. كما يدرس استخدام أنظمة الزراعة المنضبطة في حفظ الموارد الوراثية النباتية وإنتاج المركبات النباتية ذات القيمة.",

            topics: [
                "الخلايا والأنسجة النباتية",
                "القدرة الكلية للخلايا",
                "مبادئ الزراعة المعقمة",
                "الأوساط الزراعية ومنظمات نمو النبات",
                "زراعة الكالس والخلايا",
                "الإكثار الدقيق",
                "تكوين الأعضاء والتجدد",
                "التحويل الوراثي للنبات",
                "إنتاج المستقلبات المتخصصة"
            ],

            connection:
                "يدعم المقرر إكثار النباتات وحفظها والتحويل الوراثي وتحسين المحاصيل وإنتاج المركبات النباتية ذات القيمة."
        }
    },


    /* =====================================================
       12 — GENETIC ENGINEERING
       ===================================================== */

    "12": {
        title: "Genetic Engineering",
        icon: "gene-edit",

        summary:
            "Genetic Engineering uses molecular methods to deliberately isolate, assemble, transfer, express or modify genetic material.",

        overview:
            "Genetic Engineering examines the deliberate manipulation of DNA for defined experimental or biotechnological objectives. The course covers recombinant DNA technology, DNA isolation and manipulation, restriction and ligation, cloning vectors, gene insertion, transformation, selection and expression of introduced sequences. It also introduces principles of targeted genome modification. The focus is on the design and execution of molecular procedures used to alter or control genetic material.",

        topics: [
            "Recombinant DNA technology",
            "DNA isolation and manipulation",
            "Restriction enzymes and DNA ligation",
            "Cloning vectors",
            "Gene cloning",
            "Transformation and selection",
            "Gene expression",
            "Polymerase chain reaction as a molecular tool",
            "Genome editing principles"
        ],

        connection:
            "Provides core molecular technologies for recombinant DNA research, molecular diagnostics, therapeutic biotechnology, industrial biotechnology and genetic modification.",

        visuals: [
            {
                src:
                    "assets/genetic-engineering/genetic-engineering-journey.png",

                alt:
                    "Scientific workflow connecting DNA design, gene transfer, transformation and molecular verification.",

                altAr:
                    "رسم علمي يوضح Genetic Engineering ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific workflow connecting DNA design, gene transfer, transformation and molecular verification.",

                captionAr:
                    "Genetic Engineering — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/genetic-engineering/genetic-engineering-visual-pack.png",

                alt:
                    "Integrated visual overview of recombinant DNA strategies, vectors, transformation and engineered biological systems.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Genetic Engineering وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of recombinant DNA strategies, vectors, transformation and engineered biological systems.",

                captionAr:
                    "Genetic Engineering — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-12",

        ar: {
            title: "الهندسة الوراثية",

            summary:
                "تستخدم الهندسة الوراثية طرائق جزيئية لعزل المادة الوراثية أو تجميعها أو نقلها أو التعبير عنها أو تعديلها بصورة مقصودة.",

            overview:
                "تدرس الهندسة الوراثية التلاعب المتعمد بالحمض النووي لتحقيق أهداف تجريبية أو تقانية حيوية محددة. ويغطي المقرر تقانات DNA المعاد التركيب وعزل DNA ومعالجته وإنزيمات القطع والربط وناقلات الاستنساخ وإدخال الجينات والتحويل والانتخاب والتعبير عن التتابعات المدخلة. كما يقدم مبادئ التعديل الموجّه للجينوم، مع التركيز على تصميم وتنفيذ الإجراءات الجزيئية المستخدمة لتغيير المادة الوراثية أو التحكم بها.",

            topics: [
                "تقنية DNA المعاد التركيب",
                "عزل DNA ومعالجته",
                "إنزيمات القطع وربط DNA",
                "ناقلات الاستنساخ",
                "استنساخ الجينات",
                "التحويل والانتخاب",
                "التعبير الجيني",
                "تفاعل البوليميراز المتسلسل كأداة جزيئية",
                "مبادئ تحرير الجينوم"
            ],

            connection:
                "يوفر المقرر تقانات جزيئية أساسية لأبحاث DNA المعاد التركيب والتشخيص الجزيئي والتقانة الحيوية العلاجية والصناعية والتعديل الوراثي."
        }
    },


    /* =====================================================
       13 — PRINCIPLES OF BIOTECHNOLOGY
       ===================================================== */

    "13": {
        title: "Principles of Biotechnology",
        icon: "biotech",

        summary:
            "This foundational subject establishes how biological systems, organisms and biomolecules can be applied to develop useful products, processes and technologies.",

        overview:
            "Principles of Biotechnology introduces biotechnology as an interdisciplinary field that applies biological systems, organisms, cells and biomolecules to scientific and technological objectives. The course establishes the fundamental concepts underlying microbial, plant, medical, pharmaceutical, industrial and environmental biotechnology. It also introduces the relationship between biological knowledge and technological application, including the use of biological systems in production processes and other controlled biotechnological systems.",

        topics: [
            "Definition and scope of biotechnology",
            "Development of modern biotechnology",
            "Biological systems used in biotechnology",
            "Microbial biotechnology",
            "Plant biotechnology",
            "Medical and pharmaceutical biotechnology",
            "Industrial biotechnology",
            "Environmental biotechnology",
            "Biological production systems"
        ],

        connection:
            "Provides the conceptual framework connecting the molecular, cellular, microbial, plant, medical and industrial dimensions of the Biotechnology curriculum.",

        visuals: [
            {
                src:
                    "assets/principles-of-biotechnology/principles-of-biotechnology-journey.png",

                alt:
                    "Scientific pathway connecting biological resources, laboratory methods, bioprocessing and biotechnology applications.",

                altAr:
                    "رسم علمي يوضح Principles of Biotechnology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting biological resources, laboratory methods, bioprocessing and biotechnology applications.",

                captionAr:
                    "Principles of Biotechnology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/principles-of-biotechnology/principles-of-biotechnology-visual-pack.png",

                alt:
                    "Integrated visual overview of core biotechnology concepts, enabling technologies and applied outcomes.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Principles of Biotechnology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of core biotechnology concepts, enabling technologies and applied outcomes.",

                captionAr:
                    "Principles of Biotechnology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-13",

        ar: {
            title: "مبادئ التقانة الحيوية",

            summary:
                "يؤسس هذا المقرر لفهم كيفية توظيف الأنظمة والكائنات والجزيئات الحيوية لتطوير منتجات وعمليات وتقانات مفيدة.",

            overview:
                "يقدم مقرر مبادئ التقانة الحيوية التقانة الحيوية بوصفها مجالًا متعدد التخصصات يوظف الأنظمة والكائنات والخلايا والجزيئات الحيوية لتحقيق أهداف علمية وتقنية. ويضع المقرر المفاهيم الأساسية للتقانة الحيوية الميكروبية والنباتية والطبية والدوائية والصناعية والبيئية، كما يوضح العلاقة بين المعرفة البيولوجية والتطبيق التقني، بما في ذلك استخدام الأنظمة الحيوية في عمليات الإنتاج والأنظمة الحيوية المنضبطة.",

            topics: [
                "تعريف التقانة الحيوية ونطاقها",
                "تطور التقانة الحيوية الحديثة",
                "الأنظمة البيولوجية المستخدمة في التقانة الحيوية",
                "التقانة الحيوية الميكروبية",
                "التقانة الحيوية النباتية",
                "التقانة الحيوية الطبية والدوائية",
                "التقانة الحيوية الصناعية",
                "التقانة الحيوية البيئية",
                "أنظمة الإنتاج الحيوي"
            ],

            connection:
                "يوفر المقرر الإطار المفاهيمي الذي يربط الأبعاد الجزيئية والخلوية والميكروبية والنباتية والطبية والصناعية لمنهج التقانات الحيوية."
        }
    },


    /* =====================================================
       14 — MOLECULAR BIOLOGY
       ===================================================== */

    "14": {
        title: "Molecular Biology",
        icon: "dna",

        summary:
            "Molecular Biology explains how DNA, RNA and proteins interact to store, transmit, express and regulate biological information.",

        overview:
            "Molecular Biology examines biological processes at the molecular level, with emphasis on nucleic acids, proteins and the regulation of genetic information. The course covers DNA structure, replication and genome maintenance, transcription, RNA processing, translation and protein synthesis, together with mechanisms controlling gene expression. The focus is on the molecular mechanisms governing the use and regulation of genetic information within cells.",

        topics: [
            "DNA structure and organization",
            "DNA replication",
            "Genome maintenance",
            "Transcription",
            "RNA processing",
            "Translation and protein synthesis",
            "Gene expression",
            "Regulation of gene expression",
            "Molecular control of cellular processes"
        ],

        connection:
            "Forms a central foundation for molecular diagnostics, genomics, recombinant DNA technology, gene regulation studies and modern molecular biotechnology.",

        visuals: [
            {
                src:
                    "assets/molecular-biology/molecular-biology-journey.png",

                alt:
                    "Scientific pathway connecting DNA replication, transcription, RNA processing, translation and gene regulation.",

                altAr:
                    "رسم علمي يوضح Molecular Biology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting DNA replication, transcription, RNA processing, translation and gene regulation.",

                captionAr:
                    "Molecular Biology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/molecular-biology/molecular-biology-visual-pack.png",

                alt:
                    "Integrated visual overview of molecular information flow, nucleic acids and gene expression machinery.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Molecular Biology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of molecular information flow, nucleic acids and gene expression machinery.",

                captionAr:
                    "Molecular Biology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-14",

        ar: {
            title: "علم الأحياء الجزيئي",

            summary:
                "يفسر علم الأحياء الجزيئي كيفية تفاعل DNA وRNA والبروتينات لخزن المعلومات البيولوجية ونقلها والتعبير عنها وتنظيمها.",

            overview:
                "يدرس علم الأحياء الجزيئي العمليات البيولوجية على المستوى الجزيئي مع التركيز على الأحماض النووية والبروتينات وتنظيم المعلومات الوراثية. ويتناول المقرر بنية DNA وتضاعفه والمحافظة على سلامة الجينوم والنسخ ومعالجة RNA والترجمة وتخليق البروتين وآليات تنظيم التعبير الجيني. ويركز على الآليات الجزيئية التي تحكم استخدام المعلومات الوراثية وتنظيمها داخل الخلية.",

            topics: [
                "بنية DNA وتنظيمه",
                "تضاعف DNA",
                "المحافظة على سلامة الجينوم",
                "النسخ",
                "معالجة RNA",
                "الترجمة وتخليق البروتين",
                "التعبير الجيني",
                "تنظيم التعبير الجيني",
                "التحكم الجزيئي بالعمليات الخلوية"
            ],

            connection:
                "يشكل المقرر أساسًا محوريًا للتشخيص الجزيئي وعلم الجينوم وتقنية DNA المعاد التركيب ودراسة تنظيم الجينات والتقانة الحيوية الجزيئية الحديثة."
        }
    },


    /* =====================================================
       15 — MYCOLOGY
       ===================================================== */

    "15": {
        title: "Mycology",
        icon: "fungus",

        summary:
            "Mycology examines fungi as distinctive eukaryotic organisms with important structural, ecological, metabolic, medical and industrial properties.",

        overview:
            "Mycology is the study of fungi and their structural, physiological, reproductive and ecological characteristics. The course examines fungal cell organization, hyphae and mycelium, nutrition, growth and reproductive strategies and the basis of fungal classification. It also addresses fungal interactions with other organisms and the metabolic properties that contribute to their ecological, medical, agricultural and industrial significance.",

        topics: [
            "Fungal characteristics and diversity",
            "Hyphae and mycelial organization",
            "Fungal classification",
            "Asexual and sexual reproduction",
            "Fungal nutrition and growth",
            "Fungal physiology",
            "Fungal ecology",
            "Medical and agricultural mycology",
            "Industrial and biotechnology applications"
        ],

        connection:
            "Supports fungal biotechnology, fermentation, enzyme production, organic-acid production, secondary metabolites and industrial bioprocessing.",

        visuals: [
            {
                src:
                    "assets/mycology/mycology-journey.png",

                alt:
                    "Scientific pathway connecting fungal morphology, hyphae, spores, reproduction and applied fungal biotechnology.",

                altAr:
                    "رسم علمي يوضح Mycology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting fungal morphology, hyphae, spores, reproduction and applied fungal biotechnology.",

                captionAr:
                    "Mycology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/mycology/mycology-visual-pack.png",

                alt:
                    "Integrated visual overview of fungal structure, life cycles, cultures and biotechnology applications.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Mycology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of fungal structure, life cycles, cultures and biotechnology applications.",

                captionAr:
                    "Mycology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-15",

        ar: {
            title: "علم الفطريات",

            summary:
                "يدرس علم الفطريات الفطريات بوصفها كائنات حقيقية النوى ذات خصائص بنيوية وبيئية وأيضية وطبية وصناعية مهمة.",

            overview:
                "يدرس علم الفطريات الخصائص البنيوية والفسيولوجية والتكاثرية والبيئية للفطريات. ويتناول المقرر تنظيم الخلية الفطرية والخيوط والميسيليوم والتغذية والنمو واستراتيجيات التكاثر والأسس العامة لتصنيف الفطريات. كما يدرس تفاعلات الفطريات مع الكائنات الأخرى والقدرات الأيضية التي تسهم في أهميتها البيئية والطبية والزراعية والصناعية.",

            topics: [
                "خصائص الفطريات وتنوعها",
                "الخيوط الفطرية وتنظيم الميسيليوم",
                "تصنيف الفطريات",
                "التكاثر اللاجنسي والجنسي",
                "تغذية الفطريات ونموها",
                "فسيولوجيا الفطريات",
                "بيئة الفطريات",
                "علم الفطريات الطبي والزراعي",
                "التطبيقات الصناعية والتقانية الحيوية"
            ],

            connection:
                "يدعم المقرر التقانة الحيوية الفطرية والتخمير وإنتاج الإنزيمات والأحماض العضوية والمستقلبات الثانوية والمعالجة الحيوية الصناعية."
        }
    },


    /* =====================================================
       16 — PHYCOLOGY / ALGOLOGY
       ===================================================== */

    "16": {
        title: "Phycology / Algology",
        icon: "algae",

        summary:
            "Phycology examines algae as diverse photosynthetic biological systems and evaluates their physiological, ecological and biotechnological significance.",

        overview:
            "Phycology, or Algology, examines the biology of algae with emphasis on their diversity, cellular organization, photosynthesis, growth, reproduction and ecological roles. The course considers the physiological processes that govern algal biomass production and the biological properties of algal products, including pigments, lipids and other valuable compounds. It also introduces algae as biological resources for environmental and emerging biotechnological applications.",

        topics: [
            "Algal diversity and classification",
            "Algal cell structure",
            "Photosynthesis and carbon fixation",
            "Growth and reproduction",
            "Algal physiology",
            "Aquatic ecology",
            "Algal cultivation",
            "Pigments and valuable metabolites",
            "Applied and environmental phycology"
        ],

        connection:
            "Links algal biology with biomass production, pigments, bioactive compounds, environmental biotechnology and emerging algal bioprocesses.",

        visuals: [
            {
                src:
                    "assets/phycology-algology/phycology-algology-journey.png",

                alt:
                    "Scientific pathway connecting algal diversity, photosynthetic cells, cultivation and applied algal biotechnology.",

                altAr:
                    "رسم علمي يوضح Phycology / Algology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting algal diversity, photosynthetic cells, cultivation and applied algal biotechnology.",

                captionAr:
                    "Phycology / Algology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/phycology-algology/phycology-algology-visual-pack.png",

                alt:
                    "Integrated visual overview of microalgae, macroalgae, photobioreactors and algal products.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Phycology / Algology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of microalgae, macroalgae, photobioreactors and algal products.",

                captionAr:
                    "Phycology / Algology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-16",

        ar: {
            title: "علم الطحالب",

            summary:
                "يدرس علم الطحالب الطحالب بوصفها أنظمة بيولوجية متنوعة وقادرة على البناء الضوئي، ويبحث في أهميتها الفسيولوجية والبيئية والتقانية الحيوية.",

            overview:
                "يدرس علم الطحالب تنوع الطحالب وتنظيمها الخلوي وعملية البناء الضوئي والنمو والتكاثر وأدوارها البيئية. كما يتناول العمليات الفسيولوجية التي تتحكم في إنتاج الكتلة الحيوية الطحلبية، والخصائص البيولوجية لمنتجات الطحالب مثل الأصباغ والدهون والمركبات الأخرى ذات القيمة. ويقدم المقرر الطحالب بوصفها موارد بيولوجية لتطبيقات بيئية وتقانية حيوية ناشئة.",

            topics: [
                "تنوع الطحالب وتصنيفها",
                "بنية الخلية الطحلبية",
                "البناء الضوئي وتثبيت الكربون",
                "النمو والتكاثر",
                "فسيولوجيا الطحالب",
                "البيئة المائية",
                "زراعة الطحالب",
                "الأصباغ والمستقلبات ذات القيمة",
                "علم الطحالب التطبيقي والبيئي"
            ],

            connection:
                "يربط المقرر علم الطحالب بإنتاج الكتلة الحيوية والأصباغ والمركبات الفعالة حيويًا والتقانة الحيوية البيئية والعمليات الحيوية الطحلبية الناشئة."
        }
    },


    /* =====================================================
       17 — MICROBIOLOGY
       ===================================================== */

    "17": {
        title: "Microbiology",
        icon: "bacterium",

        summary:
            "Microbiology examines microorganisms as biological systems, focusing on their structure, growth, metabolism, genetics and interactions.",

        overview:
            "Microbiology studies microorganisms at structural, physiological, genetic and ecological levels. The course examines microbial diversity and classification, cellular organization, growth and cultivation, metabolism, reproduction and interactions with hosts and environmental systems. It also introduces microbial genetics and mechanisms underlying variation and adaptation in microbial populations. The subject establishes the general biological framework required for understanding microorganisms before studying their specialized applications.",

        topics: [
            "Microbial diversity and classification",
            "Microbial cell structure",
            "Microbial growth and cultivation",
            "Microbial metabolism",
            "Microbial reproduction",
            "Microbial genetics",
            "Host–microbe interactions",
            "Environmental microbial interactions",
            "Applied microbiology"
        ],

        connection:
            "Provides the biological foundation for fermentation, industrial microbiology, environmental biotechnology, medical biotechnology and microbial engineering.",

        visuals: [
            {
                src:
                    "assets/microbiology/microbiology-journey.png",

                alt:
                    "Scientific pathway connecting microorganisms, morphology, growth, metabolism, culture and laboratory identification.",

                altAr:
                    "رسم علمي يوضح Microbiology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting microorganisms, morphology, growth, metabolism, culture and laboratory identification.",

                captionAr:
                    "Microbiology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/microbiology/microbiology-visual-pack.png",

                alt:
                    "Integrated visual overview of microbial diversity, cultivation, microscopy and applied microbiology.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Microbiology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of microbial diversity, cultivation, microscopy and applied microbiology.",

                captionAr:
                    "Microbiology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-17",

        ar: {
            title: "علم الأحياء المجهرية",

            summary:
                "يدرس علم الأحياء المجهرية الكائنات المجهرية بوصفها أنظمة بيولوجية، مع التركيز على بنيتها ونموها وأيضها ووراثتها وتفاعلاتها.",

            overview:
                "يدرس علم الأحياء المجهرية الكائنات المجهرية على المستويات البنيوي والفسيولوجي والوراثي والبيئي. ويتناول المقرر التنوع الميكروبي وتصنيفه والتنظيم الخلوي والنمو والزراعة والأيض والتكاثر والتفاعلات مع العائل والأنظمة البيئية. كما يقدم علم الوراثة الميكروبية والآليات المسؤولة عن التباين والتكيف في المجتمعات الميكروبية، ويؤسس للفهم العام للكائنات المجهرية قبل دراسة تطبيقاتها المتخصصة.",

            topics: [
                "التنوع الميكروبي وتصنيفه",
                "بنية الخلية الميكروبية",
                "نمو الكائنات المجهرية وزراعتها",
                "الأيض الميكروبي",
                "التكاثر الميكروبي",
                "الوراثة الميكروبية",
                "تفاعلات العائل والميكروب",
                "التفاعلات الميكروبية البيئية",
                "علم الأحياء المجهرية التطبيقي"
            ],

            connection:
                "يوفر المقرر الأساس البيولوجي للتخمير وعلم الأحياء المجهرية الصناعية والتقانة الحيوية البيئية والطبية وهندسة الكائنات المجهرية."
        }
    },


    /* =====================================================
       18 — ANTIBIOTICS
       ===================================================== */

    "18": {
        title: "Antibiotics",
        icon: "antibiotic",

        summary:
            "Antibiotics are biologically active agents that inhibit or eliminate susceptible bacteria by interfering with essential cellular processes.",

        overview:
            "Antibiotics examines antibacterial agents and the molecular mechanisms through which they inhibit essential bacterial processes. The course covers major antibiotic groups and their targets, including pathways involved in cell-wall synthesis, protein synthesis and nucleic-acid metabolism. It also addresses antimicrobial susceptibility testing and the cellular and genetic mechanisms responsible for bacterial resistance to antimicrobial agents. The subject connects antimicrobial action with bacterial physiology and the development of resistance.",

        topics: [
            "Antibiotic classes and classification",
            "Bacterial targets of antibiotics",
            "Inhibition of cell-wall synthesis",
            "Inhibition of protein synthesis",
            "Effects on nucleic-acid processes",
            "Antimicrobial susceptibility testing",
            "Mechanisms of antibiotic resistance",
            "Genetic basis of resistance",
            "Antimicrobial use and resistance control"
        ],

        connection:
            "Connects microbiology with antimicrobial biotechnology, pharmaceutical research, diagnostic microbiology and investigation of antibiotic resistance.",

        visuals: [
            {
                src:
                    "assets/antibiotics/antibiotics-journey.png",

                alt:
                    "Scientific pathway from antimicrobial compounds to cellular targets, mechanisms of action and resistance.",

                altAr:
                    "رسم علمي يوضح Antibiotics ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway from antimicrobial compounds to cellular targets, mechanisms of action and resistance.",

                captionAr:
                    "Antibiotics — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/antibiotics/antibiotics-visual-pack.png",

                alt:
                    "Integrated visual overview of antibiotic classes, biological targets and antimicrobial resistance.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Antibiotics وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of antibiotic classes, biological targets and antimicrobial resistance.",

                captionAr:
                    "Antibiotics — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-18",

        ar: {
            title: "المضادات الحيوية",

            summary:
                "المضادات الحيوية عوامل فعالة حيويًا تثبط البكتيريا الحساسة أو تقضي عليها من خلال التأثير في عمليات خلوية أساسية.",

            overview:
                "يدرس مقرر المضادات الحيوية العوامل المضادة للبكتيريا والآليات الجزيئية التي تثبط من خلالها العمليات البكتيرية الأساسية. ويتناول المجموعات الرئيسية للمضادات الحيوية وأهدافها، بما في ذلك المسارات المرتبطة بتخليق جدار الخلية وتخليق البروتين والعمليات الخاصة بالأحماض النووية. كما يتناول اختبار الحساسية للمضادات والآليات الخلوية والوراثية المسؤولة عن مقاومة البكتيريا للعوامل المضادة للميكروبات، ويربط بين آلية عمل المضاد الحيوي وفسيولوجيا البكتيريا وتطور المقاومة.",

            topics: [
                "تصنيف المضادات الحيوية ومجاميعها",
                "الأهداف البكتيرية للمضادات الحيوية",
                "تثبيط تخليق جدار الخلية",
                "تثبيط تخليق البروتين",
                "التأثير في عمليات الأحماض النووية",
                "اختبار الحساسية للمضادات",
                "آليات مقاومة المضادات الحيوية",
                "الأساس الوراثي للمقاومة",
                "استخدام المضادات والسيطرة على المقاومة"
            ],

            connection:
                "يربط المقرر علم الأحياء المجهرية بالتقانة الحيوية المضادة للميكروبات والبحوث الدوائية والتشخيص الميكروبي ودراسة مقاومة المضادات الحيوية."
        }
    },


    /* =====================================================
       19 — HEMATOLOGY
       ===================================================== */

    "19": {
        title: "Hematology",
        icon: "blood",

        summary:
            "Hematology examines blood as a specialized tissue and studies its cellular composition, formation, function and laboratory characteristics.",

        overview:
            "Hematology examines the cellular and functional organization of blood and the processes responsible for the production and regulation of blood cells. The course covers erythrocytes, leukocytes and platelets, hematopoiesis, hemoglobin and oxygen transport, and the mechanisms involved in hemostasis and coagulation. It also introduces the principles of basic blood examination and the interpretation of hematological parameters in the context of normal physiology and disease.",

        topics: [
            "Blood composition and functions",
            "Hematopoiesis",
            "Erythrocytes",
            "Hemoglobin and oxygen transport",
            "Leukocytes",
            "Platelets",
            "Hemostasis and coagulation",
            "Blood-cell examination",
            "Basic hematological parameters"
        ],

        connection:
            "Supports biomedical biotechnology through blood-cell analysis, laboratory diagnostics, biomarkers and investigation of physiological and pathological states.",

        visuals: [
            {
                src:
                    "assets/hematology/hematology-journey.png",

                alt:
                    "Scientific pathway connecting blood cells, hematopoiesis, laboratory analysis and major hematological processes.",

                altAr:
                    "رسم علمي يوضح Hematology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting blood cells, hematopoiesis, laboratory analysis and major hematological processes.",

                captionAr:
                    "Hematology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/hematology/hematology-visual-pack.png",

                alt:
                    "Integrated visual overview of erythrocytes, leukocytes, platelets and blood-forming tissues.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Hematology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of erythrocytes, leukocytes, platelets and blood-forming tissues.",

                captionAr:
                    "Hematology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-19",

        ar: {
            title: "علم الدم",

            summary:
                "يدرس علم الدم الدم بوصفه نسيجًا متخصصًا ويركز على مكوناته الخلوية وتكوينه ووظائفه وخصائصه المختبرية.",

            overview:
                "يدرس علم الدم التنظيم الخلوي والوظيفي للدم والعمليات المسؤولة عن تكوين خلايا الدم وتنظيمها. ويتناول المقرر كريات الدم الحمراء والبيضاء والصفيحات وتكون الدم والهيموغلوبين ونقل الأكسجين والآليات المشاركة في الإرقاء والتخثر. كما يقدم مبادئ الفحص الأساسي للدم وتفسير المؤشرات الدموية في سياق الوظيفة الفسيولوجية والحالات المرضية.",

            topics: [
                "تركيب الدم ووظائفه",
                "تكون الدم",
                "كريات الدم الحمراء",
                "الهيموغلوبين ونقل الأكسجين",
                "كريات الدم البيضاء",
                "الصفيحات",
                "الإرقاء والتخثر",
                "فحص خلايا الدم",
                "المؤشرات الدموية الأساسية"
            ],

            connection:
                "يدعم المقرر التقانة الحيوية الطبية من خلال تحليل خلايا الدم والتشخيص المختبري والمؤشرات الحيوية ودراسة الحالات الفسيولوجية والمرضية."
        }
    },


    /* =====================================================
       20 — BIOINFORMATICS
       ===================================================== */

    "20": {
        title: "Bioinformatics",
        icon: "bioinformatics",

        summary:
            "Bioinformatics applies computational methods to organize, compare and interpret biological data, particularly sequence and molecular information.",

        overview:
            "Bioinformatics integrates biological knowledge with computational methods, mathematics and statistics to manage and analyze biological information. The course introduces biological databases and computational approaches for DNA, RNA and protein sequence analysis, including sequence alignment, similarity searching, genome analysis and functional annotation. It also introduces the interpretation of large biological datasets and the integration of computational results with biological information.",

        topics: [
            "Biological databases",
            "Biological sequence data",
            "Sequence alignment",
            "Similarity searching",
            "Genome analysis",
            "Gene prediction and annotation",
            "Comparative genomics",
            "Transcriptomic and proteomic data",
            "Biological interpretation of computational results"
        ],

        connection:
            "Supports genomics, molecular diagnostics, gene annotation, comparative analysis, biomarker discovery and data-driven biotechnology.",

        visuals: [
            {
                src:
                    "assets/bioinformatics/bioinformatics-journey.png",

                alt:
                    "Scientific workflow connecting biological sequences, databases, computational analysis and interpretation.",

                altAr:
                    "رسم علمي يوضح Bioinformatics ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific workflow connecting biological sequences, databases, computational analysis and interpretation.",

                captionAr:
                    "Bioinformatics — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/bioinformatics/bioinformatics-visual-pack.png",

                alt:
                    "Integrated visual overview of sequence analysis, alignment, annotation and biological data interpretation.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Bioinformatics وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of sequence analysis, alignment, annotation and biological data interpretation.",

                captionAr:
                    "Bioinformatics — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-20",

        ar: {
            title: "المعلوماتية الحيوية",

            summary:
                "تطبق المعلوماتية الحيوية الأساليب الحاسوبية لتنظيم البيانات البيولوجية ومقارنتها وتفسيرها، ولا سيما بيانات التتابعات والمعلومات الجزيئية.",

            overview:
                "تدمج المعلوماتية الحيوية المعرفة البيولوجية بالطرائق الحاسوبية والرياضيات والإحصاء لإدارة المعلومات البيولوجية وتحليلها. ويقدم المقرر قواعد البيانات البيولوجية والأساليب الحاسوبية لتحليل تتابعات DNA وRNA والبروتين، بما في ذلك محاذاة التتابعات والبحث عن التشابه وتحليل الجينوم والتنبؤ بالوظائف والتعليق الوظيفي. كما يقدم مبادئ تفسير مجموعات البيانات البيولوجية الكبيرة وربط النتائج الحاسوبية بالمعلومات البيولوجية.",

            topics: [
                "قواعد البيانات البيولوجية",
                "بيانات التتابعات البيولوجية",
                "محاذاة التتابعات",
                "البحث عن التشابه",
                "تحليل الجينوم",
                "التنبؤ بالجينات والتعليق الوظيفي",
                "علم الجينوم المقارن",
                "بيانات النسخ والبروتيوميات",
                "التفسير البيولوجي للنتائج الحاسوبية"
            ],

            connection:
                "يدعم المقرر علم الجينوم والتشخيص الجزيئي والتعليق الجيني والتحليل المقارن واكتشاف المؤشرات الحيوية والتقانة الحيوية المعتمدة على البيانات."
        }
    },


    /* =====================================================
       21 — PHYSIOLOGY
       ===================================================== */

    "21": {
        title: "Physiology",
        icon: "physiology",

        summary:
            "Physiology explains how cells, tissues and organ systems function and coordinate their activities to maintain internal stability.",

        overview:
            "Physiology examines the mechanisms responsible for normal biological function from the cellular level to integrated organ systems. The course introduces homeostasis and the regulation of nervous, endocrine, cardiovascular, respiratory and renal functions. Emphasis is placed on physiological mechanisms, feedback regulation and coordination between systems rather than on the anatomy of individual organs. The subject provides the functional framework needed to understand normal biological responses and their disruption in disease.",

        topics: [
            "Homeostasis and physiological regulation",
            "Cellular and membrane physiology",
            "Nervous system function",
            "Neural signaling",
            "Endocrine regulation",
            "Cardiovascular physiology",
            "Respiratory physiology",
            "Renal physiology and fluid balance",
            "Integration of physiological systems"
        ],

        connection:
            "Provides physiological context for biomarkers, biomedical diagnostics, pharmacological studies, disease mechanisms and biomedical biotechnology.",

        visuals: [
            {
                src:
                    "assets/physiology/physiology-journey.png",

                alt:
                    "Scientific pathway connecting organs, physiological systems, regulation, homeostasis and functional responses.",

                altAr:
                    "رسم علمي يوضح Physiology ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting organs, physiological systems, regulation, homeostasis and functional responses.",

                captionAr:
                    "Physiology — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/physiology/physiology-visual-pack.png",

                alt:
                    "Integrated visual overview of integrated body functions, signaling and homeostatic control.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Physiology وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of integrated body functions, signaling and homeostatic control.",

                captionAr:
                    "Physiology — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-21",

        ar: {
            title: "علم وظائف الأعضاء",

            summary:
                "يفسر علم وظائف الأعضاء كيفية عمل الخلايا والأنسجة والأجهزة وتنسيق نشاطاتها للحفاظ على الاستقرار الداخلي.",

            overview:
                "يدرس علم وظائف الأعضاء الآليات المسؤولة عن الوظيفة البيولوجية الطبيعية من المستوى الخلوي إلى الأجهزة المتكاملة. ويقدم المقرر مفهوم الاستتباب وتنظيم وظائف الجهاز العصبي والغدي والقلب والأوعية الدموية والجهاز التنفسي والكلوي. ويركز على الآليات الفسيولوجية والتنظيم الارتجاعي والتنسيق بين الأجهزة بدل دراسة تشريح الأعضاء بصورة منفصلة. ويوفر المقرر الإطار الوظيفي اللازم لفهم الاستجابات البيولوجية الطبيعية واضطرابها في حالات المرض.",

            topics: [
                "الاستتباب والتنظيم الفسيولوجي",
                "فسيولوجيا الخلية والغشاء",
                "وظائف الجهاز العصبي",
                "الإشارات العصبية",
                "التنظيم الهرموني",
                "فسيولوجيا القلب والأوعية",
                "فسيولوجيا الجهاز التنفسي",
                "الفسيولوجيا الكلوية وتوازن السوائل",
                "تكامل الوظائف الفسيولوجية"
            ],

            connection:
                "يوفر المقرر السياق الفسيولوجي لفهم المؤشرات الحيوية والتشخيصات الطبية الحيوية والدراسات الدوائية وآليات المرض والتقانة الحيوية الطبية."
        }
    },


    /* =====================================================
       22 — BIOFERTILIZERS
       ===================================================== */

    "22": {
        title: "Biofertilizers",
        icon: "plant",

        summary:
            "Biofertilizers are biological preparations containing beneficial living microorganisms that improve nutrient availability, plant nutrition, soil biological activity and plant growth.",

        overview:
            "Biofertilizers examines the use of beneficial living microorganisms to improve plant nutrition and soil biological processes. The course introduces major microbial groups used in biofertilization and explains mechanisms such as biological nitrogen fixation, phosphate solubilization, nutrient mobilization and beneficial interactions between microorganisms and plant roots. It also considers microbial inoculants as tools for sustainable crop production, soil fertility management and improved nutrient-use efficiency, with emphasis on reducing dependence on synthetic fertilizers.",

        topics: [
            "Beneficial microorganisms used as biofertilizers",
            "Biological nitrogen fixation",
            "Phosphate solubilization",
            "Potassium mobilization",
            "Plant growth-promoting microorganisms",
            "Root–microbe interactions",
            "Microbial inoculants",
            "Soil microbial activity",
            "Biofertilizers in sustainable agriculture"
        ],

        connection:
            "Connects microbial biotechnology with agricultural biotechnology through beneficial microbial inoculants that improve nutrient cycling, plant productivity, soil biological activity and sustainable crop production.",

        visuals: [
            {
                src:
                    "assets/biofertilizers/biofertilizers-journey.png",

                alt:
                    "Scientific pathway connecting beneficial microorganisms, nutrient cycling, plant growth promotion and soil application.",

                altAr:
                    "رسم علمي يوضح Biofertilizers ومساره العلمي المتكامل من المبادئ الأساسية إلى التطبيقات.",

                caption:
                    "Scientific pathway connecting beneficial microorganisms, nutrient cycling, plant growth promotion and soil application.",

                captionAr:
                    "Biofertilizers — مسار علمي متكامل من المفاهيم الأساسية إلى التطبيقات."
            },

            {
                src:
                    "assets/biofertilizers/biofertilizers-visual-pack.png",

                alt:
                    "Integrated visual overview of microbial biofertilizers, plant interactions and sustainable nutrient management.",

                altAr:
                    "حزمة توضيحية علمية لمفاهيم Biofertilizers وعملياتها وأدواتها وتطبيقاتها الرئيسية.",

                caption:
                    "Integrated visual overview of microbial biofertilizers, plant interactions and sustainable nutrient management.",

                captionAr:
                    "Biofertilizers — عرض توضيحي للمفاهيم والعمليات والأدوات والتطبيقات الرئيسية."
            }
        ],

        url:
            "curriculum.html#subject-22",

        ar: {
            title: "المخصبات الحيوية",

            summary:
                "المخصبات الحيوية هي مستحضرات حيوية تحتوي على كائنات مجهرية نافعة وحية تسهم في تحسين توافر العناصر الغذائية وتغذية النبات والنشاط الحيوي للتربة ونمو النبات.",

            overview:
                "يدرس مقرر المخصبات الحيوية استخدام الكائنات المجهرية الحية والنافعة لتحسين تغذية النبات والعمليات البيولوجية في التربة. ويقدم المقرر أهم المجموعات الميكروبية المستخدمة في التخصيب الحيوي، ويشرح آليات مثل تثبيت النيتروجين الحيوي وإذابة الفوسفات وتعبئة العناصر الغذائية والتفاعلات النافعة بين الكائنات المجهرية وجذور النباتات. كما يتناول دور اللقاحات الميكروبية في الإنتاج الزراعي المستدام وإدارة خصوبة التربة وتحسين كفاءة استخدام العناصر الغذائية وتقليل الاعتماد على الأسمدة الكيميائية الاصطناعية.",

            topics: [
                "الكائنات المجهرية النافعة المستخدمة كمخصبات حيوية",
                "تثبيت النيتروجين الحيوي",
                "إذابة الفوسفات",
                "تعبئة البوتاسيوم",
                "الكائنات المجهرية المحفزة لنمو النبات",
                "التفاعلات بين الجذور والكائنات المجهرية",
                "اللقاحات الميكروبية",
                "النشاط الميكروبي في التربة",
                "دور المخصبات الحيوية في الزراعة المستدامة"
            ],

            connection:
                "يربط المقرر التقانة الحيوية الميكروبية بالتقانة الحيوية الزراعية من خلال استخدام اللقاحات الميكروبية النافعة لتحسين تدوير العناصر الغذائية وإنتاجية النبات والنشاط الحيوي للتربة واستدامة الإنتاج الزراعي."
        }
    }

};


/* =========================================================
   UI TRANSLATIONS
   ========================================================= */

const UI_TRANSLATIONS = {

    en: {

        skip:
            "Skip to content",

        nav: [
            "Home",
            "About",
            "Curriculum",
            "Faculty",
            "Research",
            "Laboratories",
            "Projects",
            "News",
            "Gallery",
            "Contact"
        ],

        welcome:
            "WELCOME TO",

        discover:
            "Discover the Department →",

        exploreCurriculum:
            "Explore the Curriculum",

        stats: [
            "Department established",
            "Scientific subjects",
            "Academic year"
        ],

        aboutKicker:
            "ABOUT US",

        aboutTitle:
            "Science. Innovation.<br><span>Sustainable Future.</span>",

        aboutParagraphs: [
            "The Department of Biotechnology is a multidisciplinary life-science environment connecting biology with chemistry, genetics, microbiology, molecular science, plant science and modern biotechnology applications.",

            "Students develop scientific knowledge through biological observation, analytical methods, laboratory practice and evidence-based reasoning."
        ],

        learnMore:
            "Learn More About Us →",

        featureTitles: [
            "Modern Laboratories",
            "Research Excellence",
            "Curriculum & Learning",
            "Expert Faculty"
        ],

        featureDescriptions: [
            "Practical scientific learning supported by laboratory-based observation, measurement and research.",

            "Molecular, cellular, environmental and applied biotechnology research directions.",

            "Scientific foundations, laboratory-based learning and academic subjects across the Biotechnology curriculum.",

            "An academic learning environment supporting students, researchers and future biotechnologists."
        ],

        featureLinks: [
            "Explore Laboratories →",
            "Explore Research →",
            "Explore Curriculum →",
            "Meet the Faculty →"
        ],

        journeyKicker:
            "DEPARTMENT JOURNEY",

        journeyTitle:
            "Built around science, practice and <span>progression.</span>",

        journeyDescription:
            "A concise timeline highlighting the academic development of the Department of Biotechnology.",

        journeyItems: [
            "Department Established",
            "Evening Study",
            "First Graduation",
            "Master's Study",
            "New Academic Year"
        ],

        curriculumKicker:
            "BIOTECHNOLOGY CURRICULUM",

        curriculumTitle:
            "Twenty-Two Scientific Subjects",

        curriculumDescription:
            "Explore the scientific foundations of Biotechnology through subjects spanning molecular, cellular, plant, microbial, analytical, computational, physiological and agricultural biotechnology sciences.",

        researchKicker:
            "RESEARCH",

        researchTitle:
            "Explore <span>biotechnology in action.</span>",

        researchDescription:
            "Discover scientific directions that connect biological systems with research and biotechnology applications.",

        audienceKicker:
            "EXPLORE THE DEPARTMENT",

        audienceTitle:
            "Start where your <span>curiosity begins.</span>",

        audienceDescription:
            "Students, visitors and researchers can each find a clear route through the department website.",

        audienceTitles: [
            "For Students",
            "For Visitors",
            "For Researchers"
        ],

        audienceDescriptions: [
            "Explore subjects, curriculum pathways and learning resources.",

            "Discover laboratories, facilities and the department environment.",

            "Explore research directions and scientific collaboration."
        ],

        footerExplore:
            "Explore",

        footerAcademic:
            "Academic",

        footerInstitution:
            "Institution",

        footerCollege:
            "College of Applied Sciences",

        footerDepartment:
            "Department of Biotechnology",

        footerCopyright:
            "© 2026 University of Samarra — Department of Biotechnology.",

        footerNote:
            "Academic information should be verified against official institutional sources.",

        modalFocus:
            "Course Focus",

        modalOverview:
            "Scientific Overview",

        modalTopics:
            "Core Topics",

        modalVisual:
            "Visual Learning",

        modalVisualDescription:
            "Scientific illustrations supporting the concepts covered in this course.",

        modalConnection:
            "Biotechnology Relevance",

        modalFooter:
            "Biotechnology Curriculum",

        modalExplore:
            "Explore Full Subject →",

        modalClose:
            "Close"

    },

    ar: {

        skip:
            "الانتقال إلى المحتوى",

        nav: [
            "الرئيسية",
            "عن القسم",
            "المنهج الدراسي",
            "التدريسيون",
            "البحث العلمي",
            "المختبرات",
            "المشاريع",
            "الأخبار",
            "المعرض",
            "اتصل بنا"
        ],

        welcome:
            "مرحبًا بكم في",

        discover:
            "اكتشف القسم ←",

        exploreCurriculum:
            "استكشف المنهج الدراسي",

        stats: [
            "تأسيس القسم",
            "المواد العلمية",
            "العام الدراسي"
        ],

        aboutKicker:
            "عن القسم",

        aboutTitle:
            "العلم. الابتكار.<br><span>مستقبل مستدام.</span>",

        aboutParagraphs: [
            "يُعد قسم التقانات الأحيائية بيئة متعددة التخصصات في علوم الحياة، تجمع بين علم الأحياء والكيمياء وعلم الوراثة والأحياء المجهرية والعلوم الجزيئية وعلوم النبات وتطبيقات التقانات الحيوية الحديثة.",

            "يطور الطلبة معارفهم العلمية من خلال الملاحظة البيولوجية والطرائق التحليلية والممارسة المختبرية والاستدلال القائم على الأدلة."
        ],

        learnMore:
            "تعرّف أكثر على القسم ←",

        featureTitles: [
            "مختبرات حديثة",
            "تميز بحثي",
            "المنهج والتعلم",
            "كادر أكاديمي متخصص"
        ],

        featureDescriptions: [
            "تعلم علمي عملي مدعوم بالملاحظة والقياس والبحث القائم على المختبر.",

            "مجالات بحثية في التقانات الحيوية الجزيئية والخلوية والبيئية والتطبيقية.",

            "أسس علمية وتعلم مختبري ومواد أكاديمية تغطي مختلف مجالات منهج التقانات الحيوية.",

            "بيئة أكاديمية تدعم الطلبة والباحثين وإعداد المتخصصين في التقانات الحيوية."
        ],

        featureLinks: [
            "استكشف المختبرات ←",
            "استكشف البحث العلمي ←",
            "استكشف المنهج الدراسي ←",
            "تعرّف على الكادر الأكاديمي ←"
        ],

        journeyKicker:
            "مسيرة القسم",

        journeyTitle:
            "مسيرة تقوم على العلم والممارسة <span>والتطور.</span>",

        journeyDescription:
            "خط زمني موجز يوضح التطور الأكاديمي لقسم التقانات الأحيائية.",

        journeyItems: [
            "تأسيس القسم",
            "الدراسة المسائية",
            "التخرج الأول",
            "دراسة الماجستير",
            "العام الدراسي الجديد"
        ],

        curriculumKicker:
            "منهج التقانات الأحيائية",

        curriculumTitle:
            "اثنتان وعشرون مادة علمية",

        curriculumDescription:
            "استكشف الأسس العلمية للتقانات الأحيائية من خلال مواد تغطي العلوم الجزيئية والخلوية والنباتية والميكروبية والتحليلية والحاسوبية والفسيولوجية والتقانة الحيوية الزراعية.",

        researchKicker:
            "البحث العلمي",

        researchTitle:
            "اكتشف <span>التقانات الأحيائية في التطبيق.</span>",

        researchDescription:
            "تعرف على الاتجاهات العلمية التي تربط الأنظمة البيولوجية بالبحث والتطبيقات في التقانات الأحيائية.",

        audienceKicker:
            "استكشف القسم",

        audienceTitle:
            "ابدأ من حيث <span>يبدأ فضولك العلمي.</span>",

        audienceDescription:
            "يمكن للطلبة والزوار والباحثين الوصول إلى المسار المناسب لهم داخل موقع القسم.",

        audienceTitles: [
            "للطلبة",
            "للزوار",
            "للباحثين"
        ],

        audienceDescriptions: [
            "استكشف المواد والمسارات الدراسية والموارد التعليمية.",

            "اكتشف المختبرات والمرافق والبيئة الأكاديمية للقسم.",

            "استكشف مجالات البحث العلمي وفرص التعاون الأكاديمي."
        ],

        footerExplore:
            "استكشف",

        footerAcademic:
            "أكاديمي",

        footerInstitution:
            "المؤسسة",

        footerCollege:
            "كلية العلوم التطبيقية",

        footerDepartment:
            "قسم التقانات الأحيائية",

        footerCopyright:
            "© 2026 جامعة سامراء — قسم التقانات الأحيائية.",

        footerNote:
            "ينبغي التحقق من المعلومات الأكاديمية بالرجوع إلى المصادر الرسمية للمؤسسة.",

        modalFocus:
            "تركيز المادة",

        modalOverview:
            "النظرة العلمية",

        modalTopics:
            "الموضوعات الأساسية",

        modalVisual:
            "التعلم البصري",

        modalVisualDescription:
            "رسومات توضيحية علمية تدعم المفاهيم التي يتناولها هذا المقرر.",

        modalConnection:
            "أهمية المادة في مجال التقانات الأحيائية",

        modalFooter:
            "منهج التقانات الأحيائية",

        modalExplore:
            "استكشف المادة كاملة ←",

        modalClose:
            "إغلاق"

    }

};


/* =========================================================
   HEADER
   ========================================================= */

const siteHeader =
    $("#siteHeader");


function updateHeaderState() {

    if (!siteHeader) {
        return;
    }

    siteHeader.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );
}


window.addEventListener(
    "scroll",
    updateHeaderState,
    {
        passive: true
    }
);

updateHeaderState();


/* =========================================================
   MOBILE MENU
   ========================================================= */

const mobileMenuButton =
    $("#mobileMenuButton");

const mobileNavigation =
    $("#mobileNavigation");


function closeMobileMenu() {

    if (
        !mobileMenuButton ||
        !mobileNavigation
    ) {
        return;
    }

    mobileMenuButton.classList.remove(
        "active"
    );

    mobileNavigation.classList.remove(
        "open"
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    mobileMenuButton.setAttribute(
        "aria-label",
        currentLanguage === "ar"
            ? "فتح القائمة"
            : "Open menu"
    );

    document.body.classList.remove(
        "menu-open"
    );
}


function openMobileMenu() {

    if (
        !mobileMenuButton ||
        !mobileNavigation
    ) {
        return;
    }

    mobileMenuButton.classList.add(
        "active"
    );

    mobileNavigation.classList.add(
        "open"
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    mobileMenuButton.setAttribute(
        "aria-label",
        currentLanguage === "ar"
            ? "إغلاق القائمة"
            : "Close menu"
    );

    document.body.classList.add(
        "menu-open"
    );
}


function toggleMobileMenu() {

    if (!mobileNavigation) {
        return;
    }

    const isOpen =
        mobileNavigation.classList.contains(
            "open"
        );

    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}


if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        toggleMobileMenu
    );
}


$$(
    "#mobileNavigation a"
).forEach(
    link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    }
);


/* =========================================================
   LANGUAGE ELEMENTS
   ========================================================= */

const languageWrapper =
    $(".language-wrapper");

const languageButton =
    $("#languageButton");

const languageOptions =
    $$(".language-option");

const mobileLanguageButton =
    $("#mobileLanguageButton");


function closeLanguageMenu() {

    if (languageWrapper) {

        languageWrapper.classList.remove(
            "open"
        );
    }

    if (languageButton) {

        languageButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}


/* =========================================================
   TEXT HELPERS
   ========================================================= */

function setText(
    selector,
    value,
    parent = document
) {

    const element =
        $(selector, parent);

    if (!element) {
        return;
    }

    element.textContent =
        value;
}


function setHTML(
    selector,
    value,
    parent = document
) {

    const element =
        $(selector, parent);

    if (!element) {
        return;
    }

    element.innerHTML =
        value;
}


function setArrayText(
    selector,
    values,
    parent = document
) {

    const elements =
        $$(selector, parent);

    elements.forEach(
        (element, index) => {

            if (
                typeof values[index] === "string"
            ) {

                element.textContent =
                    values[index];
            }

        }
    );
}


/* =========================================================
   NAVIGATION TRANSLATION
   ========================================================= */

function translateNavigation(
    language
) {

    const labels =
        UI_TRANSLATIONS[
            language
        ].nav;


    const desktopLinks =
        $$(".desktop-navigation .nav-link");

    const mobileLinks =
        $$("#mobileNavigation a");


    desktopLinks.forEach(
        (link, index) => {

            if (labels[index]) {

                link.textContent =
                    labels[index];
            }
        }
    );


    mobileLinks.forEach(
        (link, index) => {

            if (labels[index]) {

                link.textContent =
                    labels[index];
            }
        }
    );
}


/* =========================================================
   STATIC SITE TRANSLATION
   ========================================================= */

function translateStaticUI(
    language
) {

    const ui =
        UI_TRANSLATIONS[
            language
        ];


    /* Accessibility */

    setText(
        ".skip-link",
        ui.skip
    );


    /* Navigation */

    translateNavigation(
        language
    );


    /* Language controls */

    if (languageButton) {

        const label =
            $("span", languageButton);

        if (label) {

            label.textContent =
                language === "ar"
                    ? "العربية"
                    : "English";
        }
    }


    if (mobileLanguageButton) {

        mobileLanguageButton.textContent =
            language === "ar"
                ? "🌐 العربية"
                : "🌐 English";
    }


    languageOptions.forEach(
        option => {

            option.classList.toggle(
                "active",
                option.dataset.language === language
            );

        }
    );


    /* Hero */

    const heroEyebrow =
        $(".hero-eyebrow");

    if (heroEyebrow) {

        heroEyebrow.innerHTML =
            `<span class="hero-eyebrow-line" aria-hidden="true"></span>${ui.welcome}`;
    }


    setText(
        ".hero-actions .button-primary",
        ui.discover
    );


    setText(
        ".hero-actions .button-light",
        ui.exploreCurriculum
    );


    /* Statistics */

    setArrayText(
        ".stat-item span",
        ui.stats
    );


    /* About */

    setText(
        ".about-section .section-kicker",
        ui.aboutKicker
    );


    setHTML(
        ".about-section .section-title",
        ui.aboutTitle
    );


    setArrayText(
        ".about-content > p:not(.section-kicker)",
        ui.aboutParagraphs
    );


    setText(
        ".about-content .button",
        ui.learnMore
    );


    /* Features */

    setArrayText(
        ".feature-card h3",
        ui.featureTitles
    );


    setArrayText(
        ".feature-card p",
        ui.featureDescriptions
    );


    setArrayText(
        ".feature-card .feature-link",
        ui.featureLinks
    );


    /* Journey */

    setText(
        ".journey-section .section-kicker",
        ui.journeyKicker
    );


    setHTML(
        ".journey-section .section-title",
        ui.journeyTitle
    );


    setText(
        ".journey-section .section-header > p",
        ui.journeyDescription
    );


    setArrayText(
        ".timeline-item h3",
        ui.journeyItems
    );


    /* Curriculum */

    setText(
        ".curriculum-section .section-kicker",
        ui.curriculumKicker
    );


    setText(
        ".curriculum-section .section-title",
        ui.curriculumTitle
    );


    setText(
        ".curriculum-section .section-header > p",
        ui.curriculumDescription
    );


    /* Research */

    setText(
        ".research-section .section-kicker",
        ui.researchKicker
    );


    setHTML(
        ".research-section .section-title",
        ui.researchTitle
    );


    setText(
        ".research-section .section-header > p",
        ui.researchDescription
    );


    /* Audience */

    setText(
        ".students-section .section-kicker",
        ui.audienceKicker
    );


    setHTML(
        ".students-section .section-title",
        ui.audienceTitle
    );


    setText(
        ".students-section .section-header > p",
        ui.audienceDescription
    );


    setArrayText(
        ".audience-card h3",
        ui.audienceTitles
    );


    setArrayText(
        ".audience-card p",
        ui.audienceDescriptions
    );


    /* Footer */

    const footerHeadings =
        $$(".footer-column h3");


    if (footerHeadings[0]) {
        footerHeadings[0].textContent =
            ui.footerExplore;
    }


    if (footerHeadings[1]) {
        footerHeadings[1].textContent =
            ui.footerAcademic;
    }


    if (footerHeadings[2]) {
        footerHeadings[2].textContent =
            ui.footerInstitution;
    }


    const institutionParagraph =
        $(".footer-column:last-child > p");


    if (institutionParagraph) {

        institutionParagraph.innerHTML =
            `${ui.footerCollege}<br>${ui.footerDepartment}`;
    }


    const footerBottom =
        $$(".footer-bottom p");


    if (footerBottom[0]) {

        footerBottom[0].textContent =
            ui.footerCopyright;
    }


    if (footerBottom[1]) {

        footerBottom[1].textContent =
            ui.footerNote;
    }


    /* Modal labels */

    updateModalStaticLabels(
        language
    );
}


/* =========================================================
   MODAL STATIC LABELS
   ========================================================= */

function updateModalStaticLabels(
    language
) {

    const ui =
        UI_TRANSLATIONS[
            language
        ];


    const modalLabels =
        $$(".modal-section-label");


    if (modalLabels[0]) {

        modalLabels[0].textContent =
            ui.modalFocus;
    }


    if (modalLabels[1]) {

        modalLabels[1].textContent =
            ui.modalOverview;
    }


    if (modalLabels[2]) {

        modalLabels[2].textContent =
            ui.modalTopics;
    }


    if (modalLabels.length >= 4) {

        const visualLabel =
            $("#modalVisualLearning .modal-section-label");

        if (visualLabel) {

            visualLabel.textContent =
                ui.modalVisual;
        }

    }


    const connectionLabel =
        modalLabels.length >= 4
            ? modalLabels[modalLabels.length - 1]
            : null;


    if (
        connectionLabel &&
        connectionLabel !== $("#modalVisualLearning .modal-section-label")
    ) {

        connectionLabel.textContent =
            ui.modalConnection;
    }


    if (modalCloseButton) {

        modalCloseButton.textContent =
            ui.modalClose;
    }


    const modalFooterLabel =
        $(".modal-footer > span");


    if (modalFooterLabel) {

        modalFooterLabel.textContent =
            ui.modalFooter;
    }
}


/* =========================================================
   SUBJECT CARDS
   ========================================================= */

const subjectCards =
    $$(".subject-card");


function getSubjectNumber(
    card
) {

    if (!card) {
        return null;
    }


    const numberElement =
        $(".subject-number", card);


    if (numberElement) {

        const match =
            numberElement.textContent.match(
                /\d+/
            );


        if (match) {

            return match[0].padStart(
                2,
                "0"
            );
        }
    }


    const index =
        subjectCards.indexOf(
            card
        );


    if (index >= 0) {

        return String(
            index + 1
        ).padStart(
            2,
            "0"
        );
    }


    return null;
}


/* =========================================================
   LOCALIZED SUBJECT
   ========================================================= */

function getLocalizedSubject(
    number
) {

    const subject =
        SUBJECTS[number];


    if (!subject) {
        return null;
    }


    if (
        currentLanguage !== "ar" ||
        !subject.ar
    ) {

        return {
            ...subject,
            number
        };
    }


    const ar =
        subject.ar;


    return {
        ...subject,

        number,

        title:
            ar.title || subject.title,

        summary:
            ar.summary || subject.summary,

        overview:
            ar.overview || subject.overview,

        topics:
            Array.isArray(ar.topics)
                ? ar.topics
                : subject.topics,

        connection:
            ar.connection || subject.connection,

        visuals:
            Array.isArray(subject.visuals)
                ? subject.visuals.map(
                    visual => ({
                        ...visual,

                        alt:
                            visual.altAr ||
                            visual.alt,

                        caption:
                            visual.captionAr ||
                            visual.caption
                    })
                )
                : []
    };
}


/* =========================================================
   UPDATE SUBJECT CARD TITLES
   ========================================================= */

function updateSubjectCardsLanguage() {

    subjectCards.forEach(
        card => {

            const number =
                getSubjectNumber(
                    card
                );


            if (
                !number ||
                !SUBJECTS[number]
            ) {
                return;
            }


            const subject =
                getLocalizedSubject(
                    number
                );


            const title =
                $(".subject-card h3", card);


            if (title) {

                title.textContent =
                    subject.title;
            }


            card.setAttribute(
                "aria-label",
                currentLanguage === "ar"
                    ? `استكشف مادة ${subject.title}`
                    : `Explore ${subject.title}`
            );

        }
    );
}


/* =========================================================
   SUBJECT ICONS
   ========================================================= */

function initializeSubjectCardIcons() {

    subjectCards.forEach(
        card => {

            const iconContainer =
                $(".subject-icon", card);


            if (!iconContainer) {
                return;
            }


            const iconName =
                card.dataset.icon;


            if (!iconName) {
                return;
            }


            const icon =
                SUBJECT_ICONS[iconName];


            if (!icon) {

                console.warn(
                    `Biotechnology: missing subject icon "${iconName}".`
                );

                return;
            }


            iconContainer.innerHTML =
                icon;
        }
    );
}


/* =========================================================
   SCIENTIFIC SVG ICON LIBRARY
   ========================================================= */

const SUBJECT_ICONS = {

    leaf: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M50 8C31 10 17 21 14 40c10 2 19-1 26-8 6-7 9-15 10-24Z"
                fill="currentColor"
                opacity=".12"
            />
            <path
                d="M50 8C32 12 20 23 15 40"
                fill="none"
                stroke="currentColor"
                stroke-width="3.2"
                stroke-linecap="round"
            />
            <path
                d="M15 49c10-13 20-21 31-27"
                fill="none"
                stroke="currentColor"
                stroke-width="3.2"
                stroke-linecap="round"
            />
            <path
                d="M24 31l-1-8M31 25l2-9M38 20l5-7"
                fill="none"
                stroke="currentColor"
                stroke-width="2.3"
                stroke-linecap="round"
            />
        </svg>
    `,

    flask: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M25 8h14M29 8v18L14 49c-3 5 1 9 7 9h22c6 0 10-4 7-9L35 26V8"
                fill="none"
                stroke="currentColor"
                stroke-width="3.3"
                stroke-linejoin="round"
                stroke-linecap="round"
            />
            <path
                d="M20 43h24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
            />
            <circle cx="28" cy="39" r="2.2" fill="currentColor"/>
            <circle cx="37" cy="35" r="1.8" fill="currentColor"/>
        </svg>
    `,

    molecule: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <polygon
                points="32,12 47,21 47,39 32,48 17,39 17,21"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
            />
            <circle cx="32" cy="12" r="4.5" fill="currentColor"/>
            <circle cx="47" cy="21" r="4.5" fill="currentColor"/>
            <circle cx="47" cy="39" r="4.5" fill="currentColor"/>
            <circle cx="32" cy="48" r="4.5" fill="currentColor"/>
            <circle cx="17" cy="39" r="4.5" fill="currentColor"/>
            <circle cx="17" cy="21" r="4.5" fill="currentColor"/>
        </svg>
    `,

    dna: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M18 8c19 7 28 16 28 24s-9 17-28 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3.2"
                stroke-linecap="round"
            />
            <path
                d="M46 8c-19 7-28 16-28 24s9 17 28 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3.2"
                stroke-linecap="round"
            />
            <path
                d="M24 13h16M21 21h22M20 32h24M21 43h22M24 51h16"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
            />
        </svg>
    `,

    nanotech: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="8" fill="currentColor"/>
            <circle cx="15" cy="17" r="5" fill="currentColor"/>
            <circle cx="49" cy="17" r="5" fill="currentColor"/>
            <circle cx="15" cy="47" r="5" fill="currentColor"/>
            <circle cx="49" cy="47" r="5" fill="currentColor"/>
            <path
                d="M20 21l7 6M44 21l-7 6M20 43l8-7M44 43l-8-7"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
            />
        </svg>
    `,

    cell: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <ellipse
                cx="32"
                cy="32"
                rx="23"
                ry="18"
                fill="currentColor"
                opacity=".08"
            />
            <ellipse
                cx="32"
                cy="32"
                rx="23"
                ry="18"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
            />
            <circle
                cx="34"
                cy="31"
                r="8"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
            />
            <circle cx="34" cy="31" r="3" fill="currentColor"/>
        </svg>
    `,

    microscope: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M24 8h10v8l-6 6v16"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
                stroke-linecap="round"
            />
            <path
                d="M28 38h14c8 0 12 5 12 12"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
                stroke-linecap="round"
            />
            <path
                d="M14 54h42"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
                stroke-linecap="round"
            />
        </svg>
    `,

    antibody: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M19 13l13 19 13-19"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M32 32v20"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
            />
        </svg>
    `,

    chromosome: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M19 10c12 8 15 15 13 22-2 8-7 14-13 22"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
            />
            <path
                d="M45 10c-12 8-15 15-13 22 2 8 7 14 13 22"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
            />
            <path
                d="M25 19h14M23 32h18M25 45h14"
                fill="none"
                stroke="currentColor"
                stroke-width="2.6"
                stroke-linecap="round"
            />
        </svg>
    `,

    plant: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M32 56V29"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
                stroke-linecap="round"
            />
            <path
                d="M32 34C21 34 14 27 14 17c10 1 18 5 18 17Z"
                fill="currentColor"
                opacity=".28"
            />
            <path
                d="M32 28c1-10 8-17 19-18-1 11-8 18-19 18Z"
                fill="currentColor"
                opacity=".72"
            />
        </svg>
    `,

    "gene-edit": `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M18 9c18 8 28 15 28 23s-10 15-28 23"
                fill="none"
                stroke="currentColor"
                stroke-width="3.2"
                stroke-linecap="round"
            />
            <path
                d="M46 9c-18 8-28 15-28 23s10 15 28 23"
                fill="none"
                stroke="currentColor"
                stroke-width="3.2"
                stroke-linecap="round"
            />
            <path
                d="M25 18h14M22 27h20M22 37h20M25 46h14"
                fill="none"
                stroke="currentColor"
                stroke-width="2.3"
                stroke-linecap="round"
            />
        </svg>
    `,

    biotech: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="16" cy="47" r="5" fill="currentColor"/>
            <circle cx="32" cy="31" r="5" fill="currentColor"/>
            <circle cx="49" cy="16" r="5" fill="currentColor"/>
            <path
                d="M20 44l9-9M36 28l9-8"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
            />
        </svg>
    `,

    fungus: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M14 31c2-13 10-21 18-21s16 8 18 21H14Z"
                fill="currentColor"
                opacity=".16"
            />
            <path
                d="M14 31h36M32 31v22"
                fill="none"
                stroke="currentColor"
                stroke-width="3.5"
                stroke-linecap="round"
            />
        </svg>
    `,

    algae: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M21 56c-2-13 1-22 7-29 5-6 8-11 7-20"
                fill="none"
                stroke="currentColor"
                stroke-width="3.2"
                stroke-linecap="round"
            />
            <path
                d="M32 56c2-12 8-20 15-25"
                fill="none"
                stroke="currentColor"
                stroke-width="3.2"
                stroke-linecap="round"
            />
        </svg>
    `,

    bacterium: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <rect
                x="14"
                y="18"
                width="36"
                height="28"
                rx="14"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
            />
            <circle cx="25" cy="28" r="3" fill="currentColor"/>
            <circle cx="39" cy="36" r="3" fill="currentColor"/>
        </svg>
    `,

    antibiotic: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <rect
                x="13"
                y="21"
                width="38"
                height="18"
                rx="9"
                transform="rotate(-35 32 32)"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
            />
            <path
                d="M25 21l15 13"
                fill="none"
                stroke="currentColor"
                stroke-width="2.7"
                stroke-linecap="round"
            />
        </svg>
    `,

    blood: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <circle
                cx="23"
                cy="30"
                r="10"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
            />
            <circle
                cx="41"
                cy="27"
                r="8"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
            />
            <circle
                cx="36"
                cy="44"
                r="9"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
            />
        </svg>
    `,

    bioinformatics: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <rect
                x="11"
                y="13"
                width="42"
                height="30"
                rx="3"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
            />
            <path
                d="M24 52h16M32 43v9"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
            />
        </svg>
    `,

    physiology: `
        <svg viewBox="0 0 64 64" aria-hidden="true">
            <path
                d="M32 9c-9 0-15 7-15 16 0 7 3 11 7 15v14h16V40c4-4 7-8 7-15 0-9-6-16-15-16Z"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
            />
            <path
                d="M20 30c5-5 9-5 12 0s7 5 12 0"
                fill="none"
                stroke="currentColor"
                stroke-width="2.8"
                stroke-linecap="round"
            />
        </svg>
    `
};


/* =========================================================
   SUBJECT MODAL ELEMENTS
   ========================================================= */

const subjectModal =
    $("#subjectModal");

const modalOverlay =
    $("#modalOverlay");

const modalClose =
    $("#modalClose");

const modalCloseButton =
    $("#modalCloseButton");

const modalIcon =
    $("#modalIcon");

const modalNumber =
    $("#modalNumber");

const modalTitle =
    $("#modalTitle");

const modalDescription =
    $("#modalDescription");

const modalOverview =
    $("#modalOverview");

const modalTopics =
    $("#modalTopics");

const modalConnection =
    $("#modalConnection");

const modalVisualLearning =
    $("#modalVisualLearning");


/* =========================================================
   VISUAL LEARNING
   ========================================================= */

function hideVisualLearning() {

    if (!modalVisualLearning) {
        return;
    }

    modalVisualLearning.hidden =
        true;

    modalVisualLearning.replaceChildren();
}


function createVisualCard(
    visual,
    index,
    total
) {

    if (
        !visual ||
        !visual.src
    ) {
        return null;
    }


    const figure =
        document.createElement(
            "figure"
        );

    figure.className =
        "modal-visual-item";


    const image =
        document.createElement(
            "img"
        );

    image.className =
        "modal-visual-item-image";

    image.src =
        visual.src;

    image.alt =
        visual.alt ||
        (
            currentLanguage === "ar"
                ? `رسم توضيحي علمي ${index + 1}`
                : `Scientific illustration ${index + 1}`
        );

    image.loading =
        index === 0
            ? "eager"
            : "lazy";

    image.decoding =
        "async";


    const caption =
        document.createElement(
            "figcaption"
        );

    caption.className =
        "modal-visual-item-caption";

    caption.textContent =
        visual.caption ||
        visual.alt ||
        (
            currentLanguage === "ar"
                ? `رسم توضيحي علمي ${index + 1} من ${total}.`
                : `Scientific illustration ${index + 1} of ${total}.`
        );


    figure.appendChild(
        image
    );

    figure.appendChild(
        caption
    );


    image.addEventListener(
        "error",
        () => {

            figure.remove();

            updateVisualLearningState();
        },
        {
            once: true
        }
    );


    return figure;
}


function updateVisualLearningState() {

    if (!modalVisualLearning) {
        return;
    }

    const items =
        $$(".modal-visual-item", modalVisualLearning);

    modalVisualLearning.hidden =
        items.length === 0;
}


function renderVisualLearning(
    visuals
) {

    if (!modalVisualLearning) {
        return;
    }


    modalVisualLearning.replaceChildren();


    if (
        !Array.isArray(visuals) ||
        visuals.length === 0
    ) {

        modalVisualLearning.hidden =
            true;

        return;
    }


    const ui =
        UI_TRANSLATIONS[
            currentLanguage
        ];


    const header =
        document.createElement(
            "div"
        );

    header.className =
        "modal-visual-learning-header";


    const label =
        document.createElement(
            "span"
        );

    label.className =
        "modal-section-label";

    label.textContent =
        ui.modalVisual;


    const description =
        document.createElement(
            "p"
        );

    description.textContent =
        ui.modalVisualDescription;


    header.appendChild(
        label
    );

    header.appendChild(
        description
    );


    const gallery =
        document.createElement(
            "div"
        );

    gallery.className =
        "modal-visual-gallery";

    gallery.setAttribute(
        "role",
        "list"
    );


    visuals.forEach(
        (visual, index) => {

            const item =
                createVisualCard(
                    visual,
                    index,
                    visuals.length
                );

            if (!item) {
                return;
            }

            item.setAttribute(
                "role",
                "listitem"
            );

            gallery.appendChild(
                item
            );
        }
    );


    modalVisualLearning.appendChild(
        header
    );

    modalVisualLearning.appendChild(
        gallery
    );


    updateVisualLearningState();
}


/* =========================================================
   MODAL EXPLORE LINK
   ========================================================= */

function ensureModalExploreLink() {

    if (!subjectModal) {
        return null;
    }


    const footer =
        $(".modal-footer", subjectModal);


    if (!footer) {
        return null;
    }


    let actions =
        $(".modal-actions", footer);


    if (!actions) {

        actions =
            document.createElement(
                "div"
            );

        actions.className =
            "modal-actions";


        if (modalCloseButton) {

            modalCloseButton.remove();

            actions.appendChild(
                modalCloseButton
            );
        }


        footer.appendChild(
            actions
        );
    }


    let exploreLink =
        $(".modal-explore-link", actions);


    if (!exploreLink) {

        exploreLink =
            document.createElement(
                "a"
            );

        exploreLink.className =
            "button button-primary modal-explore-link";


        if (modalCloseButton) {

            actions.insertBefore(
                exploreLink,
                modalCloseButton
            );

        } else {

            actions.appendChild(
                exploreLink
            );
        }
    }


    return exploreLink;
}


function updateModalExploreLink(
    subject
) {

    const link =
        ensureModalExploreLink();


    if (!link) {
        return;
    }


    link.hidden =
        !subject.url;


    if (!subject.url) {

        link.removeAttribute(
            "href"
        );

        return;
    }


    link.href =
        subject.url;


    link.textContent =
        UI_TRANSLATIONS[
            currentLanguage
        ].modalExplore;


    link.setAttribute(
        "aria-label",
        currentLanguage === "ar"
            ? `استكشف مادة ${subject.title} كاملة`
            : `Explore full ${subject.title} curriculum`
    );
}


/* =========================================================
   OPEN MODAL
   ========================================================= */

function openSubjectModal(
    card
) {

    if (
        !subjectModal ||
        !card
    ) {
        return;
    }


    const number =
        getSubjectNumber(
            card
        );


    if (!number) {
        return;
    }


    const subject =
        getLocalizedSubject(
            number
        );


    if (!subject) {
        return;
    }


    activeSubjectNumber =
        number;


    if (modalIcon) {

        modalIcon.innerHTML =
            SUBJECT_ICONS[
                subject.icon
            ] ||
            SUBJECT_ICONS.dna;
    }


    if (modalNumber) {

        modalNumber.textContent =
            currentLanguage === "ar"
                ? `المادة ${number}`
                : `SUBJECT ${number}`;
    }


    if (modalTitle) {

        modalTitle.textContent =
            subject.title;
    }


    if (modalDescription) {

        modalDescription.textContent =
            subject.summary;
    }


    if (modalOverview) {

        modalOverview.textContent =
            subject.overview;
    }


    if (modalTopics) {

        modalTopics.replaceChildren();


        subject.topics.forEach(
            topic => {

                const item =
                    document.createElement(
                        "li"
                    );

                item.textContent =
                    topic;

                modalTopics.appendChild(
                    item
                );
            }
        );
    }


    if (modalConnection) {

        modalConnection.textContent =
            subject.connection;
    }


    renderVisualLearning(
        subject.visuals
    );


    updateModalExploreLink(
        subject
    );


    updateModalStaticLabels(
        currentLanguage
    );


    subjectModal.classList.add(
        "open"
    );

    subjectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );


    window.setTimeout(
        () => {

            if (modalClose) {

                modalClose.focus();
            }
        },
        40
    );
}


/* =========================================================
   REFRESH OPEN MODAL
   ========================================================= */

function refreshOpenModal() {

    if (
        !activeSubjectNumber ||
        !subjectModal ||
        !subjectModal.classList.contains(
            "open"
        )
    ) {
        return;
    }


    const subject =
        getLocalizedSubject(
            activeSubjectNumber
        );


    if (!subject) {
        return;
    }


    if (modalNumber) {

        modalNumber.textContent =
            currentLanguage === "ar"
                ? `المادة ${activeSubjectNumber}`
                : `SUBJECT ${activeSubjectNumber}`;
    }


    if (modalTitle) {

        modalTitle.textContent =
            subject.title;
    }


    if (modalDescription) {

        modalDescription.textContent =
            subject.summary;
    }


    if (modalOverview) {

        modalOverview.textContent =
            subject.overview;
    }


    if (modalTopics) {

        modalTopics.replaceChildren();


        subject.topics.forEach(
            topic => {

                const item =
                    document.createElement(
                        "li"
                    );

                item.textContent =
                    topic;

                modalTopics.appendChild(
                    item
                );
            }
        );
    }


    if (modalConnection) {

        modalConnection.textContent =
            subject.connection;
    }


    renderVisualLearning(
        subject.visuals
    );


    updateModalExploreLink(
        subject
    );


    updateModalStaticLabels(
        currentLanguage
    );
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeSubjectModal() {

    if (!subjectModal) {
        return;
    }


    subjectModal.classList.remove(
        "open"
    );

    subjectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );


    activeSubjectNumber =
        null;


    hideVisualLearning();
}


/* =========================================================
   SUBJECT CARD EVENTS
   ========================================================= */

subjectCards.forEach(
    card => {

        card.setAttribute(
            "aria-haspopup",
            "dialog"
        );


        card.addEventListener(
            "click",
            () => {

                openSubjectModal(
                    card
                );
            }
        );


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openSubjectModal(
                        card
                    );
                }
            }
        );
    }
);


/* =========================================================
   MODAL EVENTS
   ========================================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeSubjectModal
    );
}


if (modalCloseButton) {

    modalCloseButton.addEventListener(
        "click",
        closeSubjectModal
    );
}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeSubjectModal
    );
}


/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */

function applyLanguage(
    language
) {

    currentLanguage =
        language === "ar"
            ? "ar"
            : "en";


    document.documentElement.lang =
        currentLanguage;


    document.documentElement.dir =
        currentLanguage === "ar"
            ? "rtl"
            : "ltr";


    const ui =
        UI_TRANSLATIONS[
            currentLanguage
        ];


    if (languageButton) {

        languageButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    translateStaticUI(
        currentLanguage
    );


    updateSubjectCardsLanguage();


    updateLanguageControls(
        currentLanguage
    );


    refreshOpenModal();


    localStorage.setItem(
        "biotech-language",
        currentLanguage
    );


    closeLanguageMenu();
}


function updateLanguageControls(
    language
) {

    if (languageButton) {

        const label =
            $("span", languageButton);

        if (label) {

            label.textContent =
                language === "ar"
                    ? "العربية"
                    : "English";
        }
    }


    if (mobileLanguageButton) {

        mobileLanguageButton.textContent =
            language === "ar"
                ? "🌐 العربية"
                : "🌐 English";
    }


    languageOptions.forEach(
        option => {

            option.classList.toggle(
                "active",
                option.dataset.language === language
            );
        }
    );
}


/* =========================================================
   LANGUAGE EVENTS
   ========================================================= */

if (
    languageButton &&
    languageWrapper
) {

    languageButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const isOpen =
                languageWrapper.classList.contains(
                    "open"
                );


            languageWrapper.classList.toggle(
                "open",
                !isOpen
            );


            languageButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );
        }
    );
}


languageOptions.forEach(
    option => {

        option.addEventListener(
            "click",
            () => {

                applyLanguage(
                    option.dataset.language
                );
            }
        );
    }
);


if (mobileLanguageButton) {

    mobileLanguageButton.addEventListener(
        "click",
        () => {

            applyLanguage(
                currentLanguage === "ar"
                    ? "en"
                    : "ar"
            );

            closeMobileMenu();
        }
    );
}


document.addEventListener(
    "click",
    event => {

        if (
            languageWrapper &&
            !languageWrapper.contains(
                event.target
            )
        ) {

            closeLanguageMenu();
        }
    }
);


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

const revealElements =
    $$(".reveal");


function initializeRevealAnimation() {

    if (!revealElements.length) {
        return;
    }


    if (
        !("IntersectionObserver" in window)
    ) {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "show"
                );
            }
        );

        return;
    }


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "show"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );
                    }
                );
            },
            {
                threshold:
                    0.12
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );
        }
    );
}


initializeRevealAnimation();


/* =========================================================
   HERO IMAGE FALLBACK
   ========================================================= */

const heroBackgroundImage =
    $("#heroBackgroundImage");

const heroImageFallback =
    $("#heroImageFallback");


function showHeroImageFallback() {

    if (heroBackgroundImage) {

        heroBackgroundImage.style.display =
            "none";
    }


    if (heroImageFallback) {

        heroImageFallback.classList.add(
            "show"
        );
    }
}


if (heroBackgroundImage) {

    if (
        heroBackgroundImage.complete &&
        heroBackgroundImage.naturalWidth === 0
    ) {

        showHeroImageFallback();

    } else {

        heroBackgroundImage.addEventListener(
            "error",
            showHeroImageFallback,
            {
                once: true
            }
        );
    }
}


/* =========================================================
   HASH NAVIGATION
   ========================================================= */

function scrollToCurrentHash() {

    const hash =
        window.location.hash;


    if (!hash) {
        return;
    }


    let target;


    try {

        target =
            document.querySelector(
                hash
            );

    } catch (error) {

        return;
    }


    if (!target) {
        return;
    }


    window.setTimeout(
        () => {

            target.scrollIntoView({
                behavior:
                    "smooth",

                block:
                    "start"
            });

        },
        120
    );
}


if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        scrollToCurrentHash,
        {
            once: true
        }
    );

} else {

    scrollToCurrentHash();
}


window.addEventListener(
    "hashchange",
    scrollToCurrentHash
);


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        if (
            subjectModal &&
            subjectModal.classList.contains(
                "open"
            )
        ) {

            closeSubjectModal();
        }


        if (
            mobileNavigation &&
            mobileNavigation.classList.contains(
                "open"
            )
        ) {

            closeMobileMenu();
        }


        closeLanguageMenu();
    }
);


/* =========================================================
   RESPONSIVE CLEANUP
   ========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900
        ) {

            closeMobileMenu();
        }
    }
);


/* =========================================================
   INITIAL STATE
   ========================================================= */

if (subjectModal) {

    subjectModal.setAttribute(
        "aria-hidden",
        "true"
    );
}


hideVisualLearning();


/* =========================================================
   INITIALIZE SUBJECTS
   ========================================================= */

initializeSubjectCardIcons();


/* =========================================================
   RESTORE LANGUAGE
   ========================================================= */

const savedLanguage =
    localStorage.getItem(
        "biotech-language"
    );


applyLanguage(
    savedLanguage === "ar"
        ? "ar"
        : "en"
);


/* =========================================================
   DEBUG INFORMATION
   ========================================================= */

const subjectNumbers =
    Object.keys(
        SUBJECTS
    );


const subjectsWithVisuals =
    subjectNumbers.filter(
        number =>
            Array.isArray(
                SUBJECTS[number].visuals
            ) &&
            SUBJECTS[number].visuals.length > 0
    );


const totalVisuals =
    subjectNumbers.reduce(
        (total, number) =>
            total +
            (
                Array.isArray(
                    SUBJECTS[number].visuals
                )
                    ? SUBJECTS[number].visuals.length
                    : 0
            ),
        0
    );


console.info(
    "Biotechnology website JavaScript initialized."
);

console.info(
    `Curriculum subjects loaded: ${subjectNumbers.length}`
);

console.info(
    `Subjects with visual learning content: ${subjectsWithVisuals.length}`
);

console.info(
    `Course illustrations registered: ${totalVisuals}`
);

console.info(
    `Current language: ${currentLanguage}`
);
/* =========================================================
   NEWS PAGE — LOCAL BILINGUAL CONTENT SYNC + NAVIGATION
   Works with the global main.js language system.
   ========================================================= */

(() => {
    "use strict";

    const translateNews = () => {
        const lang = document.documentElement.lang === "ar" ? "ar" : "en";

        document.querySelectorAll("[data-news-en][data-news-ar]").forEach((element) => {
            const value = lang === "ar"
                ? element.getAttribute("data-news-ar")
                : element.getAttribute("data-news-en");

            if (value !== null) {
                element.textContent = value;
            }
        });
    };

    const setupNewsNavigation = () => {
        const categoryRows = document.querySelectorAll(".news-category-row");
        if (!categoryRows.length) return;

        /*
         * Category destinations:
         * 01 — Seminars & Lectures  -> seminar event
         * 02 — Workshops & Training -> workshop event
         * 03 — Conferences & Research -> Research page
         * 04 — Student & Departmental Life -> student event
         */
        const destinations = [
            { type: "event", selector: ".news-event-row:nth-of-type(1)" },
            { type: "event", selector: ".news-event-row:nth-of-type(2)" },
            { type: "page", url: "research.html" },
            { type: "event", selector: ".news-event-row:nth-of-type(3)" }
        ];

        const navigate = (destination) => {
            if (!destination) return;

            if (destination.type === "page") {
                window.location.href = destination.url;
                return;
            }

            const target = document.querySelector(destination.selector);
            if (!target) return;

            if (!target.id) {
                target.id = `news-target-${Math.random().toString(36).slice(2, 9)}`;
            }

            const hash = `#${target.id}`;

            try {
                history.pushState(null, "", hash);
            } catch (error) {
                // Ignore history errors in restricted browsing contexts.
            }

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        };

        categoryRows.forEach((row, index) => {
            const destination = destinations[index];
            if (!destination) return;

            row.classList.add("news-category-clickable");
            row.setAttribute("role", "link");
            row.setAttribute("tabindex", "0");
            row.style.cursor = "pointer";

            const activate = (event) => {
                if (event) event.preventDefault();
                navigate(destination);
            };

            row.addEventListener("click", activate);

            row.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    activate(event);
                }
            });
        });
    };

    const addNavigationFeedback = () => {
        if (document.getElementById("news-navigation-style")) return;

        const style = document.createElement("style");
        style.id = "news-navigation-style";
        style.textContent = `
            .news-category-clickable {
                cursor: pointer !important;
            }

            .news-category-clickable:focus-visible {
                outline: 2px solid currentColor;
                outline-offset: -2px;
            }
        `;

        document.head.appendChild(style);
    };

    const init = () => {
        translateNews();
        addNavigationFeedback();
        setupNewsNavigation();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "lang"
            ) {
                translateNews();
                break;
            }
        }
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["lang"]
    });
})();

/* =========================================================
   PROJECTS PAGE — LOCAL JAVASCRIPT
   Compatible with the global js/main.js.
   Important: wrapped in an IIFE to avoid global collisions.
   ========================================================= */

(() => {
    "use strict";

    const initProjectsPage = () => {
        const page = document.querySelector("main.projects-page");
        if (!page) return;

        const searchInput = page.querySelector("#projectSearch");
        const searchClear = page.querySelector("#projectSearchClear");
        const typeFilter = page.querySelector("#projectTypeFilter");
        const yearFilter = page.querySelector("#projectYearFilter");
        const areaFilter = page.querySelector("#projectAreaFilter");
        const resetButton = page.querySelector("#projectReset");
        const noResults = page.querySelector("#projectNoResults");
        const recordList = page.querySelector("#projectRecordList");

        if (!recordList) return;

        const records = Array.from(
            recordList.querySelectorAll(".projects-page-record[data-type]")
        );

        const archiveVisibleCount = page.querySelector("#archiveVisibleCount");
        const facultyCount = page.querySelector("#facultyCount");
        const studentCount = page.querySelector("#studentCount");

        const domainCards = Array.from(
            page.querySelectorAll("[data-area-jump]")
        );

        const heroMetrics = page.querySelectorAll("[data-metric]");

        const normalize = (value) =>
            String(value || "")
                .normalize("NFKD")
                .toLowerCase()
                .replace(/\s+/g, " ")
                .trim();

        const formatCount = (value) =>
            String(value).padStart(2, "0");

        const getLanguage = () =>
            document.documentElement.lang === "ar" ? "ar" : "en";

        const updatePlaceholder = () => {
            if (!searchInput) return;

            const lang = getLanguage();
            const placeholder =
                searchInput.getAttribute(
                    lang === "ar"
                        ? "data-placeholder-ar"
                        : "data-placeholder-en"
                );

            if (placeholder) {
                searchInput.setAttribute("placeholder", placeholder);
            }
        };

        const getRecordText = (record) => {
            const searchData = record.getAttribute("data-search");
            if (searchData) return normalize(searchData);

            return normalize(record.textContent);
        };

        const getYears = () => {
            const years = records
                .map((record) => record.dataset.year)
                .filter(Boolean)
                .filter((year, index, all) => all.indexOf(year) === index)
                .sort((a, b) => Number(b) - Number(a));

            return years;
        };

        const populateYearFilter = () => {
            if (!yearFilter) return;

            const currentValue = yearFilter.value || "all";
            const firstOption = yearFilter.querySelector('option[value="all"]');
            const translations = firstOption
                ? {
                    en: firstOption.getAttribute("data-en") || "All years",
                    ar: firstOption.getAttribute("data-ar") || "كل السنوات"
                }
                : { en: "All years", ar: "كل السنوات" };

            yearFilter.innerHTML = "";

            const allOption = document.createElement("option");
            allOption.value = "all";
            allOption.setAttribute("data-en", translations.en);
            allOption.setAttribute("data-ar", translations.ar);
            allOption.textContent =
                getLanguage() === "ar" ? translations.ar : translations.en;
            yearFilter.appendChild(allOption);

            getYears().forEach((year) => {
                const option = document.createElement("option");
                option.value = year;
                option.textContent = year;
                yearFilter.appendChild(option);
            });

            yearFilter.value =
                Array.from(yearFilter.options).some(
                    (option) => option.value === currentValue
                )
                    ? currentValue
                    : "all";
        };

        const updateYearLabels = () => {
            if (!yearFilter) return;

            const lang = getLanguage();

            Array.from(yearFilter.options).forEach((option) => {
                if (option.value === "all") {
                    const text = option.getAttribute(
                        lang === "ar" ? "data-ar" : "data-en"
                    );
                    if (text) option.textContent = text;
                }
            });
        };

        const updateHeroMetrics = () => {
            const usedAreas = new Set(
                records
                    .map((record) => record.dataset.area)
                    .filter(Boolean)
            );

            const years = records
                .map((record) => Number(record.dataset.year))
                .filter((year) => Number.isFinite(year));

            const minYear = years.length ? Math.min(...years) : null;
            const maxYear = years.length ? Math.max(...years) : null;

            heroMetrics.forEach((metric) => {
                const type = metric.getAttribute("data-metric");

                if (type === "areas") {
                    metric.textContent = formatCount(usedAreas.size);
                }

                if (type === "records") {
                    metric.textContent = formatCount(records.length);
                }

                if (type === "range") {
                    metric.textContent =
                        minYear === null
                            ? "—"
                            : minYear === maxYear
                                ? String(minYear)
                                : `${minYear}–${maxYear}`;
                }
            });
        };

        const updateCounts = (visibleRecords) => {
            if (archiveVisibleCount) {
                archiveVisibleCount.textContent =
                    formatCount(visibleRecords.length);
            }

            if (facultyCount) {
                facultyCount.textContent = formatCount(
                    visibleRecords.filter(
                        (record) => record.dataset.type === "faculty"
                    ).length
                );
            }

            if (studentCount) {
                studentCount.textContent = formatCount(
                    visibleRecords.filter(
                        (record) => record.dataset.type === "student"
                    ).length
                );
            }
        };

        const filterRecords = () => {
            const query = normalize(searchInput?.value);
            const selectedType = typeFilter?.value || "all";
            const selectedYear = yearFilter?.value || "all";
            const selectedArea = areaFilter?.value || "all";

            const visibleRecords = [];

            records.forEach((record) => {
                const searchText = getRecordText(record);

                const matchesQuery =
                    !query || searchText.includes(query);

                const matchesType =
                    selectedType === "all" ||
                    record.dataset.type === selectedType;

                const matchesYear =
                    selectedYear === "all" ||
                    record.dataset.year === selectedYear;

                const matchesArea =
                    selectedArea === "all" ||
                    record.dataset.area === selectedArea;

                const visible =
                    matchesQuery &&
                    matchesType &&
                    matchesYear &&
                    matchesArea;

                record.hidden = !visible;

                if (visible) {
                    visibleRecords.push(record);
                }
            });

            updateCounts(visibleRecords);

            if (noResults) {
                noResults.hidden = visibleRecords.length !== 0;
            }

            if (searchClear && searchInput) {
                searchClear.hidden = searchInput.value.length === 0;
            }

            page.classList.toggle(
                "projects-page-has-filters",
                Boolean(
                    query ||
                    selectedType !== "all" ||
                    selectedYear !== "all" ||
                    selectedArea !== "all"
                )
            );
        };

        const resetFilters = () => {
            if (searchInput) searchInput.value = "";
            if (typeFilter) typeFilter.value = "all";
            if (yearFilter) yearFilter.value = "all";
            if (areaFilter) areaFilter.value = "all";

            filterRecords();

            searchInput?.focus({ preventScroll: true });
        };

        const setupSearch = () => {
            searchInput?.addEventListener("input", filterRecords);

            searchClear?.addEventListener("click", () => {
                if (!searchInput) return;
                searchInput.value = "";
                filterRecords();
                searchInput.focus({ preventScroll: true });
            });
        };

        const setupFilters = () => {
            [typeFilter, yearFilter, areaFilter]
                .filter(Boolean)
                .forEach((control) => {
                    control.addEventListener("change", filterRecords);
                });

            resetButton?.addEventListener("click", resetFilters);
        };

        const setupDomainLinks = () => {
            domainCards.forEach((link) => {
                link.addEventListener("click", (event) => {
                    const area = link.getAttribute("data-area-jump");
                    if (!area || !areaFilter) return;

                    event.preventDefault();

                    areaFilter.value = area;
                    filterRecords();

                    const archive = page.querySelector("#projectArchive");
                    if (archive) {
                        archive.scrollIntoView({
                            behavior:
                                window.matchMedia("(prefers-reduced-motion: reduce)").matches
                                    ? "auto"
                                    : "smooth",
                            block: "start"
                        });
                    }
                });
            });
        };

        const setupDetailsAccessibility = () => {
            page
                .querySelectorAll(".projects-page-record-abstract")
                .forEach((details) => {
                    details.addEventListener("toggle", () => {
                        const summary = details.querySelector("summary");
                        if (summary) {
                            summary.setAttribute(
                                "aria-expanded",
                                String(details.open)
                            );
                        }
                    });

                    const summary = details.querySelector("summary");
                    if (summary) {
                        summary.setAttribute(
                            "aria-expanded",
                            String(details.open)
                        );
                    }
                });
        };

        const closeOtherAbstracts = (openedDetails) => {
            page
                .querySelectorAll(".projects-page-record-abstract[open]")
                .forEach((details) => {
                    if (details !== openedDetails) {
                        details.removeAttribute("open");
                    }
                });
        };

        const setupAbstractBehavior = () => {
            page
                .querySelectorAll(".projects-page-record-abstract")
                .forEach((details) => {
                    details.addEventListener("toggle", () => {
                        if (details.open) {
                            closeOtherAbstracts(details);
                        }
                    });
                });
        };

        const setupLanguageSync = () => {
            updatePlaceholder();
            updateYearLabels();

            const observer = new MutationObserver((mutations) => {
                const languageChanged = mutations.some(
                    (mutation) =>
                        mutation.type === "attributes" &&
                        mutation.attributeName === "lang"
                );

                if (languageChanged) {
                    updatePlaceholder();
                    updateYearLabels();
                }
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ["lang"]
            });
        };

        const setupKeyboardConvenience = () => {
            page.addEventListener("keydown", (event) => {
                if (
                    event.key === "/" &&
                    document.activeElement !== searchInput &&
                    !["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(
                        document.activeElement?.tagName
                    )
                ) {
                    event.preventDefault();
                    searchInput?.focus();
                }
            });
        };

        const initialRender = () => {
            populateYearFilter();
            updateHeroMetrics();
            filterRecords();
        };

        setupSearch();
        setupFilters();
        setupDomainLinks();
        setupDetailsAccessibility();
        setupAbstractBehavior();
        setupLanguageSync();
        setupKeyboardConvenience();
        initialRender();

        page.setAttribute("data-projects-ready", "true");
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initProjectsPage, {
            once: true
        });
    } else {
        initProjectsPage();
    }
})();
