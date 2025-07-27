module.exports = {
    throwConfigError: (section, key, message) => {
        console.error(`Config Error in ${section}.${key}: ${message}`);
        process.exit(1);
    },
    Translate: async (text, targetLang) => {
        // Placeholder for translation, returns text as-is
        return text;
    },
    GetTranslationModule: async () => {
        // Placeholder for translation module loading
        console.log('Translation module placeholder loaded');
    }
};