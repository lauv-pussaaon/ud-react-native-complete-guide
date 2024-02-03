export const getStyles = (theme) => ({
    screenContainer: {
        margin: 24,
    },
    image: {
        width: "100%",
        height: 240,
        borderRadius: 10,
    },
    nutritionList: {
        gap: 8,
    },
    nutritionItem: {
        width: "100%",
        padding: 12,
        borderRadius: 8,
        backgroundColor: theme.custom.grey400,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nutritionLabel: {
        textTransform: "capitalize",
        color: theme.custom.dark800,
    },
    nutritionValue: {
        color: theme.custom.grey300,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 24,
        marginBottom: 12,
    },
    instructionsList: {
        gap: 24,
    },
    instructionItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    instructionPosition: {
        width: 36,
        fontSize: 20,
        textAlign: "left",
    },
    instructionText: {
        flex: 1,
        fontSize: 16,
        lineHeight: 20,
    },
});
