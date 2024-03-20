import {Content} from '@soppiya/elemix';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

// Define your Client Component
const FetchPosts = () => {
  // Initialize state to store the posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Function to fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    // Call the fetchPosts function
    fetchPosts();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <>
      <Text>Posts</Text>
      <Text>{Content.merge(['c', 'r', 't'], '0')}</Text>
      {posts.map((post: any) => (
        <Text>{post.title}</Text>
      ))}
    </>
  );
};

export default FetchPosts;
