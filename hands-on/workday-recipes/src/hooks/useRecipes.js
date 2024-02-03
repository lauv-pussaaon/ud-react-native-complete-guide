import { useEffect, useState } from "react";
import { apiHost, apiKey, recipesAPI } from "../constants/apiConfig";
import axios from "axios";

const pageSize = 20;

export function useRecipes(tag) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const [selectedTag, setSelectedTag] = useState("");

    function handleSelectTag(tag) {
        setSelectedTag(
            !tag || tag === "all" ? "" : tag.toLowerCase().replace(" ", "_")
        );
    }

    useEffect(() => {
        async function fetchRecipes() {
            setIsLoading(true);
            const options = {
                method: "GET",
                url: recipesAPI,
                params: {
                    from: "0",
                    size: pageSize,
                    tags: tag ?? selectedTag.replace(" ", "_"),
                },
                headers: {
                    "X-RapidAPI-Key": apiKey,
                    "X-RapidAPI-Host": apiHost,
                },
            };

            try {
                const response = await axios.request(options);
                const data = response.data;
                setRecipes(data);
            } catch (error) {
                setError(error);
                console.log("error loading ", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRecipes();
    }, [selectedTag]);

    return { isLoading, recipes, error, selectedTag, handleSelectTag };
}
