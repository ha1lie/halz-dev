import React, { useState } from 'react';
import { Box, Text, Avatar, Stack } from 'grommet';

function DiscordAvater() {

  const [statusColor, setStatusColor] = useState("onlineColor");

  fetch("https://api.becketto.dev/discordStatus?id=783088512139788298")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      setStatusColor(myJson.status.split(" ").join("") + "Color");
    })
    .catch(function (error) {
      console.log("We had an error");
    });

  return (
    <Stack anchor='bottom-right'>
      <Avatar size='medium' src='https://cdn.discordapp.com/avatars/783088512139788298/d2cbde3f0916841377f5ed768293e6df.png?size=256' />
      <Box background={ statusColor } width='12px' height='12px' round='6px' />
    </Stack>
  );
}

export default DiscordAvater;