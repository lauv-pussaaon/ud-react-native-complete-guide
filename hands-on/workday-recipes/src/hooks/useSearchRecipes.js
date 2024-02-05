import { useEffect, useState } from "react";
import { apiHost, apiKey, recipesAPI } from "../constants/apiConfig";
import axios from "axios";

const pageSize = 20;

export function useSearchRecipes() {
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        async function searchRecipes() {
            setIsLoading(true);
            const options = {
                method: "GET",
                url: recipesAPI,
                params: {
                    from: "0",
                    size: pageSize,
                    q: term,
                },
                headers: {
                    "X-RapidAPI-Key": apiKey,
                    "X-RapidAPI-Host": apiHost,
                },
            };

            try {
                const response = await axios.request(options);
                const data = response.data;
                console.log(data);
                setRecipes(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        if (term.length >= 3) searchRecipes();
    }, [term]);

    return { isLoading, recipes, setTerm };
}
