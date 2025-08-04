import "./App.css";
import SvgBox from "./SvgBox";
import { useEffect, useState } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Button,
  Card,
  Box,
} from "@mui/material";

function App() {
  // const openai_models = ['gpt-4o-mini', 'gpt-40-pro'];
  const [showOpenAiPelicans, setShowOpenAiPelicans] = useState(false);
  const [showAnthropicPelicans, setShowAnthropicPelicans] = useState(false);

  const openai_models = [
    "gpt-4-32k-0613",
    "gpt-4-32k-0314",
    "gpt-4-0613",
    "gpt-4",
    "gpt-3.5-turbo-16k-0613",
    "gpt-3.5-turbo-16k",
    "gpt-3.5-turbo-0613",
    "gpt-3.5-turbo-0301",
    "gpt-3.5-turbo",
    "gpt-3.5-turbo-1106",
    "gpt-4-1106-preview",
    "gpt-4-0125-preview",
    "gpt-4-turbo-preview",
    "gpt-4-turbo",
    "gpt-4o-2024-05-13",
    "gpt-4o-2024-08-06",
    "gpt-4o",
    "gpt-4o-mini-2024-07-18",
    "gpt-4o-mini",
    "o1-preview",
    "o1-mini",
    "o3",
    "o3-mini",
    "o4-mini",
    "gpt-4.1-nano",
    "gpt-4.1-mini",
    "gpt-4.1",
  ];
  const anthropic_models = [
    "claude-2",
    "claude-3-sonnet-20240229",
    "claude-3-opus-20240229",
    "claude-3-haiku-20240307",
    "claude-3",
    "claude-3-5-sonnet-20240620",
    "claude-3.5",
    "claude-3-7-sonnet-20250219",
    "claude-3.7",
    "claude-sonnet-4-20250514",
    "claude-opus-4-20250514",
    "claude-4",
  ];
  const models = openai_models;

  //  'claude-3-sonnet-20240229',
  //  'claude-2',];
  const prompt = "a pelican riding a bicycle";

  const handleClickShowOpenAiPelicans = () => {
    setShowOpenAiPelicans(true);
  };

  const handleClickShowAnthropicPelicans = () => {
    setShowAnthropicPelicans(true);
  };

  const resetPelicans = () => {
    setShowOpenAiPelicans(false);
    setShowAnthropicPelicans(false);
  };

  return (
    <div className="App">
      <Box sx={{ display: "flex", gap: 3 }}>
        {!showAnthropicPelicans && (
          <Box>
            <Button
              variant="contained"
              onClick={handleClickShowAnthropicPelicans}
            >
              Show Anthropic Pelicans
            </Button>
          </Box>
        )}
        {!showOpenAiPelicans && (
          <Box>
            <Button variant="contained" onClick={handleClickShowOpenAiPelicans}>
              Show OpenAi Pelicans
            </Button>
          </Box>
        )}
        <Box>
          <Button variant="contained" onClick={resetPelicans}>
            Reset
          </Button>
        </Box>
      </Box>
      {showAnthropicPelicans && (
        <Box>
          <ImageList>
            {anthropic_models.map((model, index) => (
              <ImageListItem key={index}>
                <SvgBox model={model} prompt={prompt} />
                <ImageListItemBar title={model} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      )}

      {showOpenAiPelicans && (
        <ImageList>
          {openai_models.map((model, index) => (
            <ImageListItem key={index}>
              <SvgBox model={model} prompt={prompt} />
              <ImageListItemBar title={model} />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
}

export default App;
