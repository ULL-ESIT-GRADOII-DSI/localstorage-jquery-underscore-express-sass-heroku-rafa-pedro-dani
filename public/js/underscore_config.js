_.templateSettings = {
    interpolate: /\{\{=([^}]*)\}\}/g,
    evaluate: /\{\{(?!=)(.*?)\}\}/g
};

all.innerHTML = _.template(underscore_content.innerHTML)();
