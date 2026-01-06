#!/bin/bash
mkdir -p public/assets

# Function to copy and rename
copy_asset() {
    src_pattern="$1"
    target_name="$2"
    # Find the file (handling the timestamp)
    src_file=$(find /Users/field/.gemini/antigravity/brain/7825fd63-b997-4745-89d3-e554ef67677d -name "${src_pattern}_*.png" | head -n 1)
    
    if [ -n "$src_file" ]; then
        cp "$src_file" "public/assets/${target_name}.webp"
        echo "Restored ${target_name}.webp"
    else
        echo "Warning: Could not find asset for ${src_pattern}"
    fi
}

copy_asset "hero_chips_ai" "hero_chips_ai"
copy_asset "flavor_korean_bbq" "flavor_korean_bbq"
copy_asset "flavor_spicy_honey" "flavor_spicy_honey"
copy_asset "flavor_yuzu_dill" "flavor_yuzu_dill"
copy_asset "problem_boring_chips" "problem_boring_chips"
copy_asset "problem_spices" "problem_spices"
copy_asset "problem_gourmet_chips" "problem_gourmet_chips"
copy_asset "solution_plain" "solution_plain"
copy_asset "solution_seasoned" "solution_seasoned"
copy_asset "solution_packaged" "solution_packaged"
copy_asset "process_trend" "process_trend"
copy_asset "process_flavor_gen" "process_flavor_gen"
copy_asset "process_launch" "process_launch"
copy_asset "social_viral_1" "social_viral_1"
copy_asset "social_viral_2" "social_viral_2"
copy_asset "social_viral_3" "social_viral_3"
copy_asset "social_viral_4" "social_viral_4"
copy_asset "why_ai_packaging" "why_ai_packaging"
