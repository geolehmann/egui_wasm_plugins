# egui_wasm_plugins_try2

Try number two...

Usage:

    cargo build --target wasm32-unknown-unknown
    wasm-bindgen --out-dir build-wasm/ --web target/wasm32-unknown-unknown/debug/egui_wings_example.wasm
    Serve the index.html thorugh some server and open it in a WebGPU-compatible browser like Chrome
