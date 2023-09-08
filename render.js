const _ = x => document.createElement(x);
class Render {
    static component(tagName, properties = {}) {
        const elm = _(tagName);
        for (const property in properties) {
            if (Object.hasOwnProperty.call(properties, property)) {
                const value = properties[property];
                elm[property] = value;
            }
        }
        return elm;
    }
    static img(properties = {}) {
        return Render.component("img", properties);
    }
}
export default Render;