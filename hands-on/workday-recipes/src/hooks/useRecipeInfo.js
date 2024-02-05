import { useEffect, useState } from "react";
import axios from "axios";
import { apiHost, apiKey, recipeInfoAPI } from "../constants/apiConfig";

export function useRecipeInfo(id) {
    const [isLoading, setIsLoading] = useState(false);
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        async function fetchRecipe(id) {
            const options = {
                method: "GET",
                url: recipeInfoAPI,
                params: {
                    id: id,
                },
                headers: {
                    "X-RapidAPI-Key": apiKey,
                    "X-RapidAPI-Host": apiHost,
                },
            };

            try {
                const response = await axios.request(options);
                const data = response.data;
                setRecipe(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchRecipe(id);
    }, []);

    return { isLoading, recipe };
}
