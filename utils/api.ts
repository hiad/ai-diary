const createUrl = (path: string) => window.location.origin + path;

export const createNewEntry = async () => {
  const response = await fetch(
    new Request(createUrl("/api/diary"), {
      method: "POST",
    })
  );

  if (response.ok) {
    const data = await response.json();
    return data.data;
  }
  return { error: true, code: response.status };
};

export const updateEntry = async ({
  id,
  content,
}: {
  id: string;
  content: string;
}) => {
  const response = await fetch(
    new Request(createUrl(`/api/diary/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );

  if (response.ok) {
    const data = await response.json();
    return data.data;
  }
  return { error: true, code: response.status };
};

export const askQuestion = async (question: string) => {
  const response = await fetch(
    new Request(createUrl("/api/question"), {
      method: "POST",
      body: JSON.stringify({ question }),
    })
  );

  if (response.ok) {
    const data = await response.json();
    return data.data;
  }
  return { error: true, code: response.status };
};
