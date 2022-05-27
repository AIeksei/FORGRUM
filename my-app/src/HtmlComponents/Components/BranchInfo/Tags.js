import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { UseAuth } from '../../Hook/UseAuth';
const Tags = ({ id }) => {
    const [tags, setTags] = useState([]);
    const {code} = UseAuth();
    useEffect(() => {
        axios.get(`http://localhost:8080/tags/post/${id}`,
            {
                headers: {
                    Authorization: 'Basic ' + code
                }
            }).then(function (resp) {
                setTags(resp.data);
            });
    }, [setTags]);

    return (
        <> {
            tags.map(tag => (
                tag.tag+" "
            ))
        } </>
    )
}
export { Tags }