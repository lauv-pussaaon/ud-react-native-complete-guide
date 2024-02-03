import axios from "axios";
import { useEffect, useState } from "react";
import { tagsAPI, apiKey, apiHost } from "../constants/apiConfig";

export function useTags(tagType) {
    const [isLoading, setIsLoading] = useState(false);
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTags() {
            setIsLoading(true);
            const options = {
                method: "GET",
                url: tagsAPI,
                headers: {
                    "X-RapidAPI-Key": apiKey,
                    "X-RapidAPI-Host": apiHost,
                },
            };

            try {
                const response = await axios.request(options);
                const data = response.data;
                const uniqueTags = data.results
                    .filter((tag) => tag.type === tagType)
                    .reduce((acc, tag) => {
                        if (!acc.includes(tag.name)) {
                            acc.push(tag.name);
                        }
                        return acc;
                    }, []);
                uniqueTags.unshift("all");
                setTags(uniqueTags);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchTags();
    }, []);

    return { isLoading, tags };
}
