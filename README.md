# freecodecamp-challenges
Place to keep solutions to freecodecamp challenges

## Responsive Web Design Projects
* [Tribute Page](https://felipe-lee.github.io/freecodecamp-challenges/responsive-web-design-projects/build-a-tribute-page/)

## Tailwind
### Setup
* Install tailwindcss using npm or yarn: [Tailwind Installation Docs](https://tailwindcss.com/docs/installation)

### Usage
Each project may or may not have a custom tailwind configuration. If they do, you can generate the files you need using:
```shell script
npx tailwindcss build <path to css> -o <path to ouput css> -c <path to project tailwind config>
```
For example:
```shell script
npx tailwindcss build responsive-web-design-projects/build-a-tribute-page/styles.css -o responsive-web-design-projects/build-a-tribute-page/output.css -c responsive-web-design-projects/build-a-tribute-page/tailwind.config.js
```
