const js = import("./wasm/hello_wasm.js");
js.then(js => {
	js.greet("WebAssembly");
});