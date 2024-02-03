import { useEffect, useState } from "react";
import { apiHost, apiKey, recipesAPI } from "../constants/apiConfig";
import axios from "axios";

const pageSize = 20;

export function useRecipes(tag) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        async function fetchRecipes() {
            const options = {
                method: "GET",
                url: recipesAPI,
                params: {
                    from: "0",
                    size: pageSize,
                    tags: tag || "",
                },
                headers: {
                    "X-RapidAPI-Key": apiKey,
                    "X-RapidAPI-Host": apiHost,
                },
            };

            try {
                const response = await axios.request(options);
                setRecipes(response.data);
            } catch (error) {
                setError(error);
                console.log("error loading ", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRecipes();
    }, []);

    return { isLoading, recipes, error };
}
