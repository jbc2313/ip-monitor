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
    use std::time::{SystemTime, UNIX_EPOCH};
    let cur_time_sec: i64 = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_secs() as i64;
    let days_past = &cur_time_sec/86400;
    let years_past: f64 = days_past as f64/365.25;
    //cur_time in sec from epoch
    format!("Hello World, The current time is {:?} seconds past EPOCH, days passed is {:?}, years passed is {:?}", cur_time_sec, days_past, years_past)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, time])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
