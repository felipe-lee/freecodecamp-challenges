# freecodecamp-challenges
Place to keep solutions to freecodecamp challenges

## Responsive Web Design Projects
* [Tribute Page](https://felipe-lee.github.io/freecodecamp-challenges/responsive-web-design-projects/build-a-tribute-page/)

## Tailwind
### Setup
1. Install project dependencies using
```shell script
yarn install
```

### Usage
Each project should have a custom tailwind configuration which you can tweak as you see fit. All tailwind css you write
should be in `styles.css`.

* To generate the `output.css` file, you can run
    ```shell script
    make gen-css PROJECT=<name-of-project>
    ```
  * For example:
    ```shell script
    make gen-css PROJECT=build-a-tribute-page
    ```
* When the page is fully ready, you can "purge" css that isn't being used by running the command like this:
    ```shell script
    NODE_ENV=production make gen-css PROJECT=build-a-tribute-page
    ```
    * This will make the output.css file much smaller.
