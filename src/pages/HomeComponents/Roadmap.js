import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Grid, Hidden } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector as MuiTimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import CheckIcon from "@mui/icons-material/Check";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";

const TimelineConnector = styled(MuiTimelineConnector)({
  minHeight: 120,
});

export default function Roadmap() {
  return (
    <>
      <Container maxWidth="lg" sx={{py: 10}}>
        <Stack justifyContent="center" sx={{ mt: { xs: 5, md: 10 }, mb: 5 }}>
          <MotionInView variants={varFadeInUp}>
            <Typography align="center" color="primary.main" variant="h2">
              OUR ROADMAP
            </Typography>
            <Typography variant="h4" align="center" fontStyle="italic">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidi"
            </Typography>
          </MotionInView>
        </Stack>

        <Stack>
          <Hidden mdDown>
            <Timeline
              position="alternate"
              sx={{
                "& .MuiTimelineItem-root": {
                  "&:before": { content: { xs: "inherit", md: '""' } },
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Lorem ipsum</Typography>
                  <Typography variant="h5">Start Community</Typography>
                  <Typography variant="h5">
                    Airdrops and giveaways launch
                  </Typography>
                  <Typography variant="h5">Smart contracts & audit</Typography>
                  <Typography variant="h5">Dolz.io opening</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Lorem ipsum</Typography>
                  <Typography variant="h5">Start Community</Typography>
                  <Typography variant="h5">
                    Airdrops and giveaways launch
                  </Typography>
                  <Typography variant="h5">Smart contracts & audit</Typography>
                  <Typography variant="h5">Dolz.io opening</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Lorem ipsum</Typography>
                  <Typography variant="h5">Start Community</Typography>
                  <Typography variant="h5">
                    Airdrops and giveaways launch
                  </Typography>
                  <Typography variant="h5">Smart contracts & audit</Typography>
                  <Typography variant="h5">Dolz.io opening</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Lorem ipsum</Typography>
                  <Typography variant="h5">Start Community</Typography>
                  <Typography variant="h5">
                    Airdrops and giveaways launch
                  </Typography>
                  <Typography variant="h5">Smart contracts & audit</Typography>
                  <Typography variant="h5">Dolz.io opening</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Lorem ipsum</Typography>
                  <Typography variant="h5">Start Community</Typography>
                  <Typography variant="h5">
                    Airdrops and giveaways launch
                  </Typography>
                  <Typography variant="h5">Smart contracts & audit</Typography>
                  <Typography variant="h5">Dolz.io opening</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Lorem ipsum</Typography>
                  <Typography variant="h5">Start Community</Typography>
                  <Typography variant="h5">
                    Airdrops and giveaways launch
                  </Typography>
                  <Typography variant="h5">Smart contracts & audit</Typography>
                  <Typography variant="h5">Dolz.io opening</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning"></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Lorem ipsum</Typography>
                  <Typography variant="h5">Start Community</Typography>
                  <Typography variant="h5">
                    Airdrops and giveaways launch
                  </Typography>
                  <Typography variant="h5">Smart contracts & audit</Typography>
                  <Typography variant="h5">Dolz.io opening</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Hidden>

          <Hidden mdUp>
            <Timeline
              position="right"
              sx={{
                "& .MuiTimelineItem-root": {
                  "&:before": { content: { xs: "inherit", md: '""' } },
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">
                    Community and discord growth
                  </Typography>
                  <Typography variant="h5">
                    Create an organic environment for members with the interest
                    and drive of pushing MMK to new levels unseen in the NFT
                    community
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Pre-mint</Typography>
                  <Typography variant="h5">
                    Release 250 pre mints to our truly organic, hand built
                    community at the price of 0.2 eth. <br />
                    {/* Giving the OG members the opportunity to invest before
                  takeoff.
                  <br /> */}
                    Once 250 MMKs are minted it will trigger the first of many
                    giveaways for holders
                    <br />
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Paid advertise</Typography>
                  <Typography variant="h5">
                    All earnings earned from the pre-mint will be implemented
                    back into the project through the community wallet with paid
                    promotions.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">White list</Typography>
                  <Typography variant="h5">
                    Gives 1000 investors an opportunity to mint for the price of
                    0.35 eth. Available for a limited time before the public
                    mint is opened
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Public mint</Typography>
                  <Typography variant="h5">
                    This will be the last opportunity to invest into MMK at the
                    mint price of 0.5 eth. Mint will be opened to the public
                    allowing anyone the ability to invest into the MMK project.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Giveaways</Typography>
                  <Typography variant="h5">
                    MMK is going to be at the forefront of change for the future
                    and in doing so we are providing the platform to change.{" "}
                    <br />
                    EVERY 250 Mints MMK and Keys have partnership by giving away
                    5 Keys collection bundles. <br />
                    Every 500 MMK will be giving away life changing technology
                    for holders to create history. Including home music studios
                    , Full gaming setups & Streaming setups.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="warning">
                    <AccessTimeIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h3">Reveal and Rarity</Typography>
                  <Typography variant="h5">
                    All holders of official Masked Mic Killers will be revealed.
                    This will enable you to identify the rarity of your NFT and
                    enjoy the astonishing artwork created by @tikodev.
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Hidden>
        </Stack>
      </Container>
    </>
  );
}
