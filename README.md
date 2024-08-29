# egui_wasm_plugins

A minimal template to demonstrate the use of egui for a wasm32-unknown-unknown target with additional UI loaded from .wasm plugins.

Usage:

`git clone`  
`cd egui_wasm_plugins/egui_wings_example`  
`cargo build --target wasm32-unknown-unknown`  
`cd..`  
`wasm-bindgen --out-dir build-wasm/ --web target/wasm32-unknown-unknown/debug/egui_wings_example.wasm`  
`Serve the index.html thorugh some server and open it in a WebGPU-compatible browser like Chrome`  
