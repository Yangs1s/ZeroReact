#!/usr/bin/osascript
tell application "Terminal"
    activate
    do script ". /Users/yangseongjin/opt/anaconda3/bin/activate && conda activate /Users/yangseongjin/opt/anaconda3/envs/sparta_project; "
end tell
