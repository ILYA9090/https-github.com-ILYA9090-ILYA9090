export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log("обработка");
        if (sort) {
          return [...posts].sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        }
        return posts;
      }, [sort, posts]);
}