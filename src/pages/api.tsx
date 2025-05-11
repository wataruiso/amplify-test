import { fetchAuthSession } from "aws-amplify/auth"

async function callApiWithIdToken() {
  try {
    const session = await fetchAuthSession();
    const idToken = session?.tokens?.idToken?.toString;

    if (!idToken) {
      throw new Error("ID token not found");
    }

    const response = await fetch(
      `https://${import.meta.env.VITE_APIGW_ID}.execute-api.${import.meta.env.VITE_REGION}.amazonaws.com/test`, 
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API response:", data);
    return data;
  } catch (error) {
    console.error("Error calling API:", error);
    throw error;
  }
}

export default function ApiPage() {
  return (
    <>
    <div>
      <button onClick={async () => {
      try {
        const data = await callApiWithIdToken();
        console.log("Fetched data:", data);
        alert(JSON.stringify(data, null, 2));
      } catch (error) {
        alert("Failed to fetch data. Check console for details.");
      }
      }}>
      Fetch API Data
      </button>
    </div>
    </>
  )
}