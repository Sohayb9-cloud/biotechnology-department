document.addEventListener("DOMContentLoaded", () => {
    const cards = [...document.querySelectorAll(".faculty-member-card")];
    const searchInput = document.querySelector("#facultySearch");
    const filterButtons = [...document.querySelectorAll("[data-faculty-filter]")];
    const resultCount = document.querySelector("#facultyResultCount");
    const emptyState = document.querySelector("#facultyNoResults");
    const modal = document.querySelector("#facultyProfileModal");
    const modalName = document.querySelector("#facultyModalName");
    const modalRank = document.querySelector("#facultyModalRank");
    const modalSpecialization = document.querySelector("#facultyModalSpecialization");
    const modalFocus = document.querySelector("#facultyModalFocus");
    const modalCloseButtons = [...document.querySelectorAll("[data-faculty-modal-close]")];
    const backTop = document.querySelector("#facultyBackTop");

    let activeFilter = "all";

    const normalize = (value = "") =>
        value.toLowerCase().trim().replace(/\s+/g, " ");

    function cardMatches(card) {
        const query = normalize(searchInput?.value || "");
        const rank = normalize(card.dataset.rank || "");
        const haystack = normalize([
            card.querySelector(".faculty-member-name")?.textContent,
            card.querySelector(".faculty-member-specialization")?.textContent,
            card.querySelector(".faculty-member-focus")?.textContent,
            card.dataset.tags
        ].filter(Boolean).join(" "));

        const matchesQuery = !query || haystack.includes(query);
        const matchesRank = activeFilter === "all" || rank === activeFilter;
        return matchesQuery && matchesRank;
    }

    function updateDirectory() {
        let visible = 0;

        cards.forEach(card => {
            const visibleCard = cardMatches(card);
            card.hidden = !visibleCard;
            if (visibleCard) visible += 1;
        });

        if (resultCount) {
            resultCount.textContent = `${visible} ${visible === 1 ? "profile" : "profiles"}`;
        }

        if (emptyState) {
            emptyState.hidden = visible !== 0;
        }
    }

    searchInput?.addEventListener("input", updateDirectory);

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            activeFilter = normalize(button.dataset.facultyFilter || "all");

            filterButtons.forEach(item => {
                const active = item === button;
                item.classList.toggle("is-active", active);
                item.setAttribute("aria-pressed", String(active));
            });

            updateDirectory();
        });
    });

    function openModal(card) {
        if (!modal) return;

        const name = card.querySelector(".faculty-member-name")?.textContent.trim() || "Faculty Member";
        const rank = card.querySelector(".faculty-member-rank")?.textContent.trim() || "—";
        const specialization = card.querySelector(".faculty-member-specialization")?.textContent.trim() || "—";
        const focus = card.querySelector(".faculty-member-focus")?.textContent.trim() || "—";

        if (modalName) modalName.textContent = name;
        if (modalRank) modalRank.textContent = rank;
        if (modalSpecialization) modalSpecialization.textContent = specialization;
        if (modalFocus) modalFocus.textContent = focus;

        modal.hidden = false;
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        if (!modal) return;
        modal.hidden = true;
        document.body.classList.remove("modal-open");
    }

    cards.forEach(card => {
        const trigger = card.querySelector("[data-faculty-profile]");
        trigger?.addEventListener("click", event => {
            event.preventDefault();
            openModal(card);
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal && !modal.hidden) {
            closeModal();
        }
    });

    window.addEventListener("scroll", () => {
        backTop?.classList.toggle("is-visible", window.scrollY > 500);
    }, { passive: true });

    updateDirectory();
});
