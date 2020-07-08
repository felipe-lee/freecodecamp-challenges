RESPONSIVE_WEB_DIR := responsive-web-design-projects

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: gen-css
gen-css:  ## Generate CSS, e.g. make gen-css PROJECT=build-a-tribute-page
	TAILWIND_CONFIG=$(RESPONSIVE_WEB_DIR)/$(PROJECT)/tailwind.config.js postcss $(RESPONSIVE_WEB_DIR)/$(PROJECT)/styles.css -o $(RESPONSIVE_WEB_DIR)/$(PROJECT)/output.css
