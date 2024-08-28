cargo build --target wasm32-unknown-unknown --release
wasm-bindgen --out-dir ../build-wasm/ --web ../target/wasm32-unknown-unknown/release/egui_wings_example.wasm