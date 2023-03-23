export const Theme = ({themeMode}) => {
    return{
        colors: {
            background: themeMode === "light" ? 'cyan' : "deeppink",
            onBackground: 'black'
        }
    }
}