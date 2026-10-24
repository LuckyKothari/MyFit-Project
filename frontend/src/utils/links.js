// Builds YouTube search links for exercise tutorials and food recipes.
// Search links need no API key and never break from a deleted video.
const youtubeSearch = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`

export const exerciseVideoUrl = (name) =>
  youtubeSearch(`how to do ${name} proper form`)

export const recipeUrl = (name, dietType) =>
  youtubeSearch(`${name} healthy ${dietType === 'veg' ? 'vegetarian ' : ''}recipe`)
