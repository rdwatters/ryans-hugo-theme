curdir=$(pwd)
TODAY=$(date)
# branch_name=$(git symbolic-ref --short -q HEAD)
# echo ${branch_name}
# find ${curdir}/content \( -iname '*.jpg' -o -iname '*.png' -o -iname '*.gif' \) -type f -exec cp -v -- {} ${curdir}/source-images/ \;
# gulp images

# Build Hugo but ignore cache (important for pulling values from most recently published Google Spreadsheet)
hugo --ignoreCache
cp ${curdir}/public/singles/index.html ${curdir}/public/assets/site-index.json