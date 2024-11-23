const pushMenu = new PushMessage({
    anchor: "top",
    position: "left",
    custom: { animation: "slideTop", titleAlign: "center", closeMode: "button" },
});

const menuPushCSS = `                
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    gap: 10px;
`;

const menuLayout = {
    "Getting Started": {
        "Import Script": {},
        "Basic Usage": {},
        Complementations: {},
        Initialization: {},
    },
    Customization: {
        "Define Settings": {},
    },
    "Advanced Usage": {
        Functions: {},
        "Golden Push Example": {},
        "Custom message body": {},
    },
};

function gettingStarted() {
    pushMenu.push(
        `
            <button class="button menu-button" onClick=" mainScroller.scroll( 1, 'import-script'    )">Import Script</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 1, 'basic-usage'      )">Basic Usage</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 1, 'complementations' )">Complementations</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 1, 'initialization'   )">Initialization</button>
        `,
        {
            title: "Getting Started",
            unique: "push-getting-started",
            bodyStyle: menuPushCSS,
        }
    );
}

function methodsAndProperties() {
    pushMenu.push(
        `
            <button class="button menu-button" onClick=" mainScroller.scroll( 2, 'push-method'              )"> push() Method</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 2, 'hover-method'             )"> hover() Method</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 2, 'customtext-method'        )"> customText() Method</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 2, 'image-method'             )"> image() Method</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 2, 'pushcounter-property'     )"> pushCounter Property</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 2, 'globalpushcounter-static' )"> globalPushCounter Static</button>
        `,
        {
            title: "Methods And Properties",
            unique: "push-methods-and-properties",
            bodyStyle: menuPushCSS,
        }
    );
}

function customization() {
    pushMenu.push(
        `
            <button class="button menu-button" onClick=" mainScroller.scroll( 3, 'default-customization'    )">Default Customization</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 3, 'individual-customization' )">Individual Customization</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 3, 'text-customization'       )">Text Customization</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 3, 'customization-parameters' )">Customization Parameters</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 3, 'close-mode'               )">Close Mode</button>
        `,
        {
            title: "Customization",
            unique: "push-customization",
            bodyStyle: menuPushCSS,
        }
    );
}

function advancedUsage() {
    pushMenu.push(
        `
            <button class="button menu-button" onClick=" mainScroller.scroll( 4, 'advanced-complementations' )">Advance Complementations</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 4, 'push-functions'            )">Push Functions</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 4, 'bodystyle-example'         )">bodyStyle Example</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 4, 'using-images-simplified'   )">Using Images Simplified</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 4, 'appendchild-example'       )">appendChild Example</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 4, 'push-root-css-example'     )">Push Root CSS Example</button>
        `,
        {
            title: "Advanced Usage",
            unique: "push-advanced-usage",
            bodyStyle: menuPushCSS,
        }
    );
}

function fullExamples() {
    pushMenu.push(
        `
            <button class="button menu-button" onClick=" mainScroller.scroll( 5, 'full-instance-example' )">Full Instance Example</button>
            <button class="button menu-button" onClick=" mainScroller.scroll( 5, 'full-push-example'     )">Full Push Example</button>
        `,
        {
            title: "Full Examples",
            unique: "push-full-examples",
            bodyStyle: menuPushCSS,
        }
    );
}

function openMenu() {
    pushMenu.push(
        `
            <button class="button menu-button" onClick="Scroller.scrollTo('top')">About</button>
            <button class="button menu-button" onClick="Scroller.scrollTo('examples')">Examples</button>
            <button class="button menu-button" onClick="gettingStarted();       mainScroller.scroll( 1, 'getting-started'        )">Getting Started</button>
            <button class="button menu-button" onClick="methodsAndProperties(); mainScroller.scroll( 2, 'methods-and-properties' )">Methods And Properties</button>
            <button class="button menu-button" onClick="customization();        mainScroller.scroll( 3, 'customization'          )">Customization</button>
            <button class="button menu-button" onClick="advancedUsage();        mainScroller.scroll( 4, 'advanced-usage'         )">Advanced Usage</button>
            <button class="button menu-button" onClick="fullExamples();         mainScroller.scroll( 5, 'full-examples'          )">Full Examples</button>
        `,
        {
            title: "Menu",
            unique: "push-open-menu",
            bodyStyle: menuPushCSS,
        }
    );
}
