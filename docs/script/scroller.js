class Scroller {
    static main = document.body;
    constructor(scrollerId, aminationIn, animationOut, duration) {
        this.scroller = document.getElementById(scrollerId);
        this.animationIn = aminationIn;
        this.animationOut = animationOut;
        this.duration = duration;
        this.currentIndex = 0;
        this.#scrollerStart();
    }

    #scrollerStart() {
        const scrollerChildrens = Array.from(this.scroller.children);
        scrollerChildrens.forEach((children, index) => {
            const computedStyle = getComputedStyle(children);
            children.originalDisplay = computedStyle.display;
            children.originalPosition = computedStyle.position;
            children.index = index;
            if (index > 0) {
                children.style.display = "none";
                children.style.visibility = "hidden";
            }
        });
    }

    scroll(scrollerIndex, scrollTo = "") {
        if (this.currentIndex == scrollerIndex - 1) {
            Scroller.scrollTo(scrollTo);
            return;
        }
        this.currentIndex = scrollerIndex - 1;
        const scrollerChildrens = Array.from(this.scroller.children);
        scrollerChildrens.forEach((children, index) => {
            if (index == scrollerIndex - 1) {
                setTimeout(() => {
                    children.style.display = children.originalDisplay;
                    this.#animate(children, this.animationIn);
                    children.scrollIntoView({ behavior: "smooth" });
                    Scroller.scrollTo(scrollTo);
                }, this.duration);
            } else {
                this.#animate(children, this.animationOut, "reverse");
                setTimeout(() => {
                    children.style.display = "none";
                    children.style.visibility = "hidden";
                }, this.duration);
            }
        });
    }

    #animate(element, animation, direction) {
        element.style.animation = "";
        setTimeout(() => {
            element.style.visibility = "visible";
            element.style.animation = `${animation} ${this.duration}ms ease-in-out ${direction || ""} forwards`;
        }, 1);
    }

    static scrollTo(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            if (id === "top") {
                this.main.scrollTo({ top: 0, behavior: "smooth" });
            }
            if (id === "bottom") {
                this.main.scrollTo({ top: main.scrollHeight, behavior: "smooth" });
            }
        }
    }
}

Scroller.main = document.querySelector(".main");
const mainScroller = new Scroller("scroller-1", "comeFromRight", "comeFromLeft", 500);
