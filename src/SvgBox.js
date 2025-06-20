import { Card, Box, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function SvgBox({ model, prompt }) {
  const [svgText, setSvgText] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [blobUrl, setBlobUrl] = useState();

  useEffect(() => {
    console.log('?????')
    async function fetchSvg() {
      const params = new URLSearchParams();
      params.append("prompt", prompt);
    params.append("model", model);

      const apiUrl = `http://127.0.0.1:8000/get_svg/?${params.toString()}`;
      console.log("Fetching from:", apiUrl);

      try {
        const response = await fetch(apiUrl);
        const svgString = await response.text(); // assuming the endpoint returns raw SVG
        setSvgText(svgString);

        const blob = new Blob([svgString], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
      } catch (err) {
        console.error("Failed to fetch SVG", err);
      } finally {
        console.log('finally', model)
        setIsLoading(false);
      }
    }

    fetchSvg();
  }, []);


  return isLoading ? (
      <Card>
      <Box
        sx={{
            width: "400px",
            height: "400px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
          <CircularProgress />
      </Box>
    </Card>
  ) : (
    <Card>
      <Box
        sx={{
          width: "400px",
          height: "400px",
          backgroundColor: "red",
        }}
      >
        <img src={blobUrl} alt="A pelican tbh" />
      </Box>
    </Card>
  );
}
