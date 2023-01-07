#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn time() -> String {
    use std::time::SystemTime;
    let cur_time = SystemTime::now();
    format!("Hello World, The current time is {:?}", cur_time)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, time])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
