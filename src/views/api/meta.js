let meta = {};
let data = {};
meta.get = (key) => {
    return data[key];
}
meta.set = (key, val) => {
    data[key] = val;
}
export default meta;