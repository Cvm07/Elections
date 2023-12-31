import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"; 
import {Avatar, Button,TextField, Box, Typography, Container, FormGroup, FormControlLabel, Switch} from "@mui/material";
import PollRoundedIcon from '@mui/icons-material/PollRounded';


function EditElection() {
  const location = useLocation();
  const navigate = useNavigate();
  const election = location.state?.data
  const roles = sessionStorage.getItem("adminRoles");
  const adminRoles = JSON.parse(roles);
  const [title, setTitle] = useState(election.title);
  const [description, setDescription] = useState(election.description);
  const [area, setArea] = useState(election.area);
  const [code, setCode] = useState(election.constraints[0]);
  const [maxCandidates, setMaxCandidates] = useState(election.maxCandidates);
  const [maxVoters, setMaxVoters] = useState(election.maxVoter);
  const maxWinners = 1;
  const [ageRestriction, setAgeRestriction] =useState(election.ageRestriction);
  const phase = election.phase;

  const min_candidates = 1, max_candidates = 100;
  const min_voters = 1, max_voters = 99999999;

    const handleKeyDown = (e) => {
      if (/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    };

  async function EditElection(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:5500/api/election/open/${election._id}/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        area,
        code,
        maxCandidates,
        maxVoters,
        maxWinners,
        ageRestriction,
        adminRoles,
        phase
      })
    });

    const data = await response.json();
    if (data.status === 'OK') {
      toast.success("Successfully modified election details !", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });
      setTimeout(() => {
        navigate(`/admin/elections/view/open`, {
            state: { data: { ...data.election } },
          });
        }, 500);
    } else {
      toast.error("Some error occurred, please try again !", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });
    }
  }

  return (
    <>
      <Container component="main" maxWidth="md">
        <Box sx={{
              boxShadow: 3,
              borderRadius: 2,
              px: 2, py: 2,
              mx: 2, my: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><PollRoundedIcon /></Avatar>
          <Typography component="h1" variant="h5">Edit Open Election Details</Typography>
          <Box component = "form" onSubmit = {EditElection} noValidate sx = {{mt: 1}} >
            <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name = "title" required fullWidth
                id="title"
                label="Election Title"
                type="text"
                autoFocus
                margin="normal"
            />
            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name = "description" required fullWidth
                id="description"
                label="Election Description"
                type="text"
                margin="normal"
            />
            <TextField
                value={area}
                onChange={(e) => setArea(e.target.value)}
                name = "area" required fullWidth
                id="area"
                label="Area"
                type="text"
                margin="normal"
                autoComplete="false"
            />
            <TextField
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                name = "code" required fullWidth
                id="code"
                label="ID Matching Code"
                type="text"
                margin="normal"
                autoComplete="false"
                inputProps={{maxLength: 3}}
                onKeyDown={handleKeyDown}
            />
            <TextField
                value={maxCandidates}
                onChange = {
                  (e) => {
                    var val = parseInt(e.target.value, 10);
                    if (val > max_candidates) val = max_candidates;
                    if (val < min_candidates) val = min_candidates;
                    setMaxCandidates(val);
                  }
                }
                name = "maxCandidates" required fullWidth
                id = "maxCandidate"
                label="Maximum Candidate Count"
                InputProps={{ inputProps: { type: 'number', min: min_candidates, max: max_candidates } }}
                margin="normal"
            />
            <TextField
                value={maxVoters}
                onChange = {
                  (e) => {
                    var val = parseInt(e.target.value, 10);
                    if (val > max_voters) val = max_voters;
                    if (val < min_voters) val = min_voters;
                    setMaxVoters(val);
                  }
                }
                name = "maxVoters" required fullWidth
                id = "maxVoters"
                label="Maximum Voters Count"
                InputProps={{ inputProps: { type: 'number', min: min_voters, max: max_voters } }}
                margin="normal"
            />
            <FormGroup>
              <FormControlLabel
                checked={ageRestriction}
                onChange={(e) => setAgeRestriction(e.target.checked)}
                id="ageRestriction"
                name="ageRestriction" required
                control={<Switch />} 
                label="Age Restriction"
                margin="normal"
              />
            </FormGroup>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
              Edit Election Details
            </Button>
          </Box>
        </Box>
    </Container>
    </>
  )
}

export default EditElection