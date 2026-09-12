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
