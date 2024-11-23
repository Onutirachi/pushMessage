class PushMessage {
    #keyframes = {
        slideTop: `
            @keyframes slideTop {
                0% { 
                    transform: translateY(-100vw);
                    opacity: 0;
                }
                20% {
                    opacity: 0;
                }
                100% { 
                    transform: translateY(0);
                }
            }
        `,
        slideBottom: `
            @keyframes slideBottom {
                0% { 
                    transform: translateY(100vw);
                    opacity: 0;
                }
                20% {
                    opacity: 0;
                }
                100% { 
                    transform: translateY(0);
                }
            }
        `,
        slideLeft: `
            @keyframes slideLeft {
                0% { 
                    transform: translateX(-100vw);
                    opacity: 0;
                }
                20% {
                    opacity: 0;
                }
                100% { 
                    transform: translateX(0);
                }
            }
        `,
        slideRight: `
            @keyframes slideRight {
                0% { 
                    transform: translateX(100vw);
                    opacity: 0;
                }
                20% {
                    opacity: 0;
                }
                100% { 
                    transform: translateX(0);
                }
            }
        `,
        fade: `
            @keyframes fade {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        `,
        grow: `
            @keyframes grow {
                0% { 
                    scale: 0;
                    opacity: 0;
                }
                20% {
                    opacity: 0;
                }
                100% { 
                    scale: 1;
                }
            }
        `,
    };

    #defaultOptions = {
        gap: 20,
        anchor: "bottom",
        position: "right",
        elementToAppend: document.body,
        custom: {
            title: false,
            duration: 3000,
            animationDuration: 500,
            animationTimingFunction: "ease-out",
            animation: "slideBottom",
            animationOut: "slideBottom",
            animationStay: false,
            closeMode: "auto",
            time: false,
            timeColor: "#444444",
            titleFont: "sans-serif",
            titleWeight: "bold",
            titleColor: "white",
            titleAlign: "left",
            titleSize: "18px",
            messageFont: "sans-serif",
            messageWeight: "normal",
            messageColor: "white",
            messageAlign: "left",
            messageSize: "15px",
            icon: false,
            iconSize: "30px",
            iconStyle: false,
            background: "#777777",
            border: false,
            borderRadius: "10px",
            width: "300px",
            minWidth: false,
            maxWidth: false,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
            cursor: "auto",
            unique: false,
            bodyStyle: false,
            onClick: () => {},
            onClose: () => {},
        },
        customIcons: {
            info: "data:image/png;base64,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",
            success:
                "data:image/png;base64,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",
            warning:
                "data:image/png;base64,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",
            error: "data:image/png;base64,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",
            loading:
                "data:image/png;base64,R0lGODlhHgAeAPICAJiYmObm5uXl5ZmZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgACACwAAAAAHgAeAAACbZSPoQiND4+awbQLYqTU4qsl3CJ8YGiMpOmg6eh94SnApRwzdHdgPW1yPYI3nJBVNLpYzIww2aQtkcQn1GnNarPVZ5BpjXZRYiWZOp4R02dfDOt+/1q5d6sqHa7ZEPCVrrbHpyNoFngyGEiIUgAAIfkEBQoAAgAsBgAAABIACAAAAh+UBXkSvZYiMK0GKCO1NWvGNZ4Choi3cQdaVo+0WEcBACH5BAUKAAIALBAAAAAOAA4AAAIjFC6pew3LXINGImhvlLQ6FYTKl4RiJ5hmp65U6y7wKc9sKxQAIfkEBQoAAQAsFgAGAAgAEgAAAhqMgXYIyhwelLTSKJXeXPgffOJIlqRxoqC2FgAh+QQFCgACACwQABAADgAOAAACI5QvoIu3D1qCStLarjTUhB84jACCYkSW36aaTbu+sNRuXmwXACH5BAUKAAIALAYAFgASAAgAAAIflINhBg17EmKuLZlofTiL7XTTBwKiQoKRpDnQCrlLAQAh+QQFCgACACwAABAADgAOAAACIlSOomvorNyDMsEmL7Z6CgACCxeGWmlCaMqs4OWKJ6otZgEAIfkEBQoAAAAsAAAAAB4AHgAAAmuEj6O56G+UHHFS+KysGrMOaI0XipxFHmaJYsGrtiCLvPD5Xaxu26kD6vl+u41w+BMNjrekiBkgFo1C6WlkzWpTM2JHKVWCveIuCbxyylph9iSGfePg8M2Ujlmlz/p9vm8GMTamZheo9kFSAAA7",
        },
    };

    pushCounter = 0;
    static globalPushCounter = 0;

    static #styleTag;

    constructor(options = {}) {
        options.custom = options.custom || {};
        options.customIcons = options.customIcons || {};
        this.gap = options.gap || this.#defaultOptions.gap;
        this.anchor = options.anchor || this.#defaultOptions.anchor;
        this.position = options.position || this.#defaultOptions.position;
        this.elementToAppend = options.elementToAppend || this.#defaultOptions.elementToAppend;
        if (options.custom.animationOut == undefined && options.custom.animation != undefined) {
            options.custom.animationOut = options.custom.animation;
        }
        this.custom = { ...this.#defaultOptions.custom, ...options.custom };
        this.icons = { ...this.#defaultOptions.customIcons, ...options.customIcons };
        this.positionStyles = {
            center: `
                left: 0;
                right: 0;
                margin: auto;
            `,
            left: `
                left: ${this.gap}px;
            `,
            right: `
                right: ${this.gap}px;
            `,
        };
        PushMessage.#styleTag = this.#setStyleHeadTag();
        this.pushArray = [];
        this.fixedPushArray = [];
    }

    #setStyleHeadTag() {
        const styleTag = document.querySelector(".pushmessage-keyframes");
        if (styleTag) {
            return styleTag;
        } else {
            const newStyleTag = document.createElement("style");
            newStyleTag.className = "pushmessage-keyframes";
            document.head.appendChild(newStyleTag);
            return newStyleTag;
        }
    }

    #createPush(bodyContent, custom) {
        const push = document.createElement("div");
        push.custom = custom;
        if (custom.unique) push.id = custom.unique;
        push.style.cssText = `
            ${this.positionStyles[this.position]}
            background: ${custom.background};
            border: ${custom.border || "none"};
            border-radius: ${custom.borderRadius};
            width: ${custom.width};
            box-shadow: ${custom.boxShadow};
            min-width: ${custom.minWidth || ""}; 
            max-width: ${custom.maxWidth || `calc(100% - ${this.gap}px)`};
            cursor: ${custom.cursor};
            position: ${this.positionBehavior};
            box-sizing: border-box;
            padding: 10px;
            display: flex;
            gap: ${custom.icon || custom.title || custom.time || custom.closeMode === "button" ? "10px" : "0"};
            flex-direction: column;
            word-wrap: break-word;
            white-space: pre-wrap;
            word-break: break-word;
            transition: ${custom.hover ? "all 0s ease 0s" : "all 300ms ease-out"};
            z-index: 9999;
            position: ${this.elementToAppend === document.body ? "fixed" : "absolute"};
            ${custom.hover && "pointer-events: none;"}
        `;
        const header = document.createElement("div");
        header.style.cssText = `
            display: flex;
            gap: 10px;
            align-items: center;
        `;
        const icon = document.createElement("div");
        const iconSrc = this.icons[custom.icon] || custom.icon;
        icon.style.cssText = `
            width: ${custom.iconSize};
            height: ${custom.iconSize};
            margin-right: auto;
            background: url("${iconSrc}");
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            ${custom.iconStyle || "object-fit: contain;"}
            display: ${custom.icon ? "initial" : "none"};
        `;
        header.appendChild(icon);
        const title = document.createElement("div");
        title.style.cssText = `
            font-family: ${custom.titleFont};
            font-weight: ${custom.titleWeight};
            color: ${custom.titleColor};
            text-align: ${custom.titleAlign};
            font-size: ${custom.titleSize};
            flex-grow: 1;
        `;
        title.innerHTML = custom.title || "";
        header.appendChild(title);
        const time = document.createElement("div");
        time.style.cssText = `
            font-family: sans-serif;
            color: ${custom.timeColor};
            font-size: 13px;
            line-height: 13px;
            margin-left: auto;
            align-self: flex-start;
            user-select: none;
            display: ${custom.time ? "initial" : "none"};
        `;
        time.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        header.appendChild(time);
        const close = document.createElement("div");
        close.style.cssText = `
            margin-left: auto;
            font-family: monospace;
            align-self: flex-start;
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-size: 13px;
            border-radius: 5px;
            background: #555;
            text-align: center;
            cursor: pointer;
            color: white;
            transition: all 200ms ease-out;
            user-select: none;
            display: ${custom.closeMode === "button" ? "initial" : "none"};
        `;
        close.innerHTML = "✖";
        header.appendChild(close);
        close.addEventListener("mouseover", () => {
            close.style.background = "darkred";
        });
        close.addEventListener("mouseout", () => {
            close.style.background = "#555";
        });
        close.addEventListener("pointerdown", () => {
            this.close(push);
        });
        push.appendChild(header);
        const body = document.createElement("div");
        body.style.cssText = `
            font-family: ${custom.messageFont};
            font-weight: ${custom.messageWeight};
            color: ${custom.messageColor};
            text-align: ${custom.messageAlign};
            font-size: ${custom.messageSize};
            ${custom.bodyStyle || ""}
        `;
        body.innerHTML = bodyContent;
        push.body = body;
        push.appendChild(body);
        push.close = () => this.close(push);
        if (push.custom.closeMode === "swap" || push.custom.closeMode === "swapFixed") {
            push.swap = (message, custom) => this.#swap(push, message, custom);
        } else {
            push.swap = () => console.log("CloseMode must be swap or swapFixed");
        }
        return push;
    }

    #insertPushSize(push) {
        return new Promise((resolve) => {
            const pushImages = push.body.querySelectorAll("img");
            const getPushSizes = () => {
                const pushCSS = push.style.cssText;
                push.style.position = "fixed";
                push.style.visibility = "hidden";
                document.body.appendChild(push);
                const size = { height: push.offsetHeight, width: push.offsetWidth };
                document.body.removeChild(push);
                push.style.cssText = pushCSS;
                push.style.height = size.height + "px";
                push.style.width = size.width + "px";
                push.size = size;
                resolve();
            };
            if (pushImages.length === 0) {
                getPushSizes();
                return;
            }
            let loadedCount = 0;
            const checkAllImagesLoaded = () => {
                loadedCount++;
                if (loadedCount === pushImages.length) {
                    getPushSizes();
                }
            };
            pushImages.forEach((image) => {
                if (image.complete) {
                    checkAllImagesLoaded();
                } else {
                    image.onload = checkAllImagesLoaded;
                    image.onerror = checkAllImagesLoaded;
                }
            });
        });
    }

    #start(push) {
        this.elementToAppend.appendChild(push);
        if (!push.custom.hover) {
            const targetArray = this.#getTargetArray(push);
            if (push.custom.swap === undefined) {
                targetArray.array.unshift(push);
            } else {
                targetArray.array[push.custom.swap] = push;
            }
            this.#pushPosition();
            this.#insertAnimation(push);
            this.pushCounter++;
            PushMessage.globalPushCounter++;
        }
        this.#animateIn(push);
    }

    #getTargetArray(push) {
        const closeMode = push.custom.swapCloseMode || push.custom.closeMode;
        if (closeMode === "auto" || closeMode === "swap") {
            return { array: this.pushArray, index: this.pushArray.indexOf(push) };
        } else {
            return { array: this.fixedPushArray, index: this.fixedPushArray.indexOf(push) };
        }
    }

    #pushPosition() {
        var fixedDistance = 0;
        this.fixedPushArray.forEach((push) => {
            let pushIndex = this.fixedPushArray.indexOf(push);
            let distance = this.gap;
            for (let i = 0; i < pushIndex; i++) {
                distance += this.fixedPushArray[i].size.height + this.gap;
            }
            push.style[this.anchor] = distance + "px";
            fixedDistance += push.size.height + this.gap;
        });
        this.pushArray.forEach((push) => {
            let pushIndex = this.pushArray.indexOf(push);
            let distance = fixedDistance + this.gap;
            for (let i = 0; i < pushIndex; i++) {
                distance += this.pushArray[i].size.height + this.gap;
            }
            push.style[this.anchor] = distance + "px";
        });
    }

    #insertAnimation(push) {
        const uniqueAnimations = new Set([push.custom.animation, push.custom.animationOut]);
        if (push.custom.animationStay) {
            uniqueAnimations.add(push.custom.animationStay);
        }
        uniqueAnimations.forEach((animation) => {
            if (!PushMessage.#styleTag.textContent.includes(animation)) {
                if (this.#keyframes[animation]) PushMessage.#styleTag.textContent += this.#keyframes[animation];
            }
        });
    }

    #animateIn(push) {
        push.style.animation = `${push.custom.animation} ${push.custom.animationDuration}ms ${push.custom.animationTimingFunction} forwards`;
        clearTimeout(push.timeOut);
        push.timeOut = setTimeout(() => {
            //push.style.animation = "";
            push.style.animation = push.custom.animationStay || "";
            if (!push.custom.hover) {
                if (push.custom.consoleLog) {
                    console.log(`[${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}] [Push Message] ${push.custom.consoleTitle ? "[" + push.custom.consoleTitle + "]" : ""} ${push.custom.consoleLog}`);
                }
                if (push.custom.closeMode === "auto" || push.custom.closeMode === "forced") {
                    push.timeOut = setTimeout(() => {
                        this.close(push);
                    }, push.custom.duration);
                }
                if (push.custom.closeMode === "auto" || push.custom.closeMode === "fixed") {
                    push.addEventListener("click", () => {
                        this.close(push);
                        push.custom.onClick();
                    });
                }
            }
        }, push.custom.animationDuration);
    }

    #swap(push, message, custom) {
        const targetArray = this.#getTargetArray(push);
        custom = { closeMode: "auto", ...custom, swap: targetArray.index, swapCloseMode: push.custom.closeMode };
        push.swapped = true;
        this.push(message, custom);
        this.close(push);
    }

    push(message, custom = {}) {
        if (custom.animation && !custom.animationOut) {
            custom.animationOut = custom.animation;
        }
        custom = { ...this.custom, ...custom };
        if (custom.unique) {
            const unique = document.getElementById(custom.unique);
            if (unique) {
                return unique;
            }
        }
        const push = this.#createPush(message, custom);
        this.#insertPushSize(push).then(() => {
            this.#start(push);
        });
        return push;
    }

    close(push) {
        push.style.animation = `${push.custom.animationOut} ${push.custom.animationDuration}ms ${push.custom.animationTimingFunction} reverse forwards`;
        clearTimeout(push.timeOut);
        push.timeOut = setTimeout(() => {
            if (!push.custom.hover) {
                push.custom.onClose();
                const targetArray = this.#getTargetArray(push);
                if (!push.swapped) {
                    targetArray.array.splice(targetArray.index, 1);
                    this.#pushPosition();
                }
            }
            push.remove();
        }, push.custom.animationDuration);
    }

    hover(element, message, custom = {}) {
        custom = { ...this.custom, ...custom, closeMode: "auto", hover: true };
        const push = this.#createPush(message, custom);
        this.#insertAnimation(push);
        element.addEventListener("mouseenter", (e) => {
            this.#start(push);
        });
        let lastMove = 0;
        element.addEventListener("mousemove", (e) => {
            const now = performance.now();
            if (now - lastMove < 7) return;
            lastMove = now;
            requestAnimationFrame(() => {
                push.style.left = `${e.clientX + this.gap}px`;
                push.style.top = `${e.clientY + this.gap}px`;
            });
        });
        element.addEventListener("mouseleave", (e) => {
            this.close(push);
        });
    }

    customText(text, style) {
        return `<span style="${style}">${text}</span>`;
    }

    image(img, style, alt = "img") {
        return `<img style="${style}" src="${img}" alt="${alt}"/>`;
    }
}
