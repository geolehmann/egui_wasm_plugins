/* tslint:disable */
/* eslint-disable */
/**
* Entry point for web workers
* @param {number} ptr
*/
export function wasm_thread_entry_point(ptr: number): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly main: (a: number, b: number) => number;
  readonly __wings_invoke_proxy_function: (a: number, b: number, c: number, d: number) => void;
  readonly __wings_proxy_index: (a: number, b: number) => number;
  readonly __wings_raise_event: (a: number, b: number) => void;
  readonly wasm_thread_entry_point: (a: number) => void;
  readonly __wings_alloc_marshal_buffer: (a: number) => number;
  readonly __wings_copy_event_object: () => void;
  readonly __wings_invoke_func_1: (a: number, b: number) => number;
  readonly __wings_invoke_func_2: (a: number, b: number, c: number) => number;
  readonly __wings_invoke_proxy_func: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6ceccf917600fdcb: (a: number, b: number, c: number, d: number) => number;
  readonly _dyn_core__ops__function__FnMut__A_B_C_D_E_F___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1c42f4875fd35f85: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h465ea7763b1be8e2: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A_B_C_D_E_F_G___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h28e161944e8c96e0: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly _dyn_core__ops__function__FnMut__A_B_C_D_E___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h73dda35e90d5b883: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly _dyn_core__ops__function__FnMut__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8047e508458b1d38: (a: number, b: number, c: number, d: number) => void;
  readonly _dyn_core__ops__function__FnMut__A_B_C_D_E_F_G_H___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h36622a916a45b703: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0800faea50dd0b73: (a: number, b: number) => number;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h238aa23d5119843f: (a: number, b: number, c: number) => number;
  readonly _dyn_core__ops__function__FnMut__A_B_C_D___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3b398cfcacacca1f: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly _dyn_core__ops__function__FnMut__A_B_C___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hba29f2010b213168: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6f4af281b5fc5872: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6ed7677f9b4ed45e: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he292edb2ea85414c: (a: number, b: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h06478c250f6ff28a: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h47a566f8003dbe36: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
