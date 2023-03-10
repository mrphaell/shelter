import React, { useState } from 'react';
import { Button, TextField, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function Dogs() {
    const [formData, setFormData] = useState({});

    const getPersonality = () => {
        return [
            { label: 'Super smart', value: 'Super smart', id: 'super-smart' },
            { label: 'Silly goose', value: 'Silly goose', id: 'silly-goose' },
            { label: 'Social butterfly', value: 'Social butterfly', id: 'social-butterfly' },
            { label: 'Quite the snuggler', value: 'Quite the snuggler', id: 'silly-goose' },
            { label: 'Embraces quiet', value: 'Embraces quiet', id: 'embraces-quiet' },
            { label: 'Loves to hike', value: 'Loves to hike', id: 'loves-to-hike' },
            { label: 'Great guard dog', value: 'Great guard dog', id: 'great-guard-dog' },
        ];
    };

    const getTraits = () => {
        return [
            { label: 'Cuddle bug', value: 'Cuddle bug', id: 'cuddle-bug' },
            { label: 'Loyal sidekick', value: 'Loyal sidekick', id: 'loyal-sidekick' },
            { label: 'Adventure seeker', value: 'Adventure seeker', id: 'adventure-seeker' },
            { label: 'Smarty pants', value: 'Smarty pants', id: 'smarty-pants' },
            { label: 'Couch potato', value: 'Couch potato', id: 'couch-potato' },
            { label: 'Ball chaser', value: 'Ball chaser', id: 'ball-chaser' },
            { label: 'Kid companion', value: 'Kid companion', id: 'kid-companion' },
            { label: 'Energizer bunny', value: 'Energizer bunny', id: 'energizer-bunny' },
            { label: 'Lionhearted', value: 'Lionhearted', id: 'lionhearted' },
            { label: 'Gives kisses', value: 'Gives kisses', id: 'gives-kisses' },
            { label: 'Life of the dog park', value: 'Life of the dog park', id: 'life-of-the-dog-park' },
            { label: 'Wallflower', value: 'Wallflower', id: 'wallflower' },
        ];
    };

    const getBreed = () => {
        return [
            { label: 'German Sheppard', value: 'German Sheppard', id: 'german-sheppard' },
            { label: 'Poodle', value: 'Poodle', id: 'poodle' },
            { label: 'Labrador', value: 'Labrador', id: 'labrador' },
            { label: 'German Spitz', value: 'German Spitz', id: 'german-spitz' },
            { label: 'Shiba Inu', value: 'Shiba Inu', id: 'shiba-inu' },
            { label: 'Golden Retriever', value: 'Golden Retriever', id: 'golden-retriever' },
            { label: 'Border Collie', value: 'Border Collie', id: 'border-collie' },
            { label: 'Boxer', value: 'Boxer', id: 'boxer' },
            { label: 'Chihuahua', value: 'Chihuahua', id: 'chihuahua' },
            { label: 'Old English Bulldog', value: 'Old English Bulldog', id: 'old-english-bulldog' },
            { label: 'American Pit Bull Terrier', value: 'American Pit Bull Terrier', id: 'american-pit-bull-terrier' },
            { label: 'Rottweiler', value: 'Rottweiler', id: 'rottweiler' },
            { label: 'Belgian Sheppard', value: 'Belgian Sheppard', id: 'belgian-sheppard' },
            { label: 'Black Mouth Cur', value: 'Black Mouth Cur', id: 'black-mouth-cur' },
        ];
    };

    const getGoodWith = () => {
        return [
            { label: 'Kids', value: 'Kids', id: 'kids' },
            { label: 'Cats', value: 'Cats', id: 'cats' },
            { label: 'Other dogs', value: 'Other dogs', id: 'other-dogs' },
        ];
    };

    const getTrained = () => {
        return [
            { label: 'Leash', value: 'Leash', id: 'leash' },
            { label: 'Crate', value: 'Crate', id: 'crate' },
            { label: 'House', value: 'House', id: 'house' },
            { label: 'Leash Pulling', value: 'Leash Pulling', id: 'leash-pulling' },
            { label: 'Afraid of men', value: 'Afraid of men', id: 'afraid-of-men' },
            { label: 'Afraid of women', value: 'Afraid of women', id: 'afraid-of-women' },
            { label: 'Afraid of strangers', value: 'Afraid of strangers', id: 'afraid-of-strangers' },
            { label: 'Excessive barking', value: 'Excessive barking', id: 'excessive-barking' },
            { label: 'Excessive chewing', value: 'Excessive chewing', id: 'excessive-chewing' },
            { label: 'Digging', value: 'Digging', id: 'digging' },
            { label: 'Jumping on people', value: 'Jumping on people', id: 'jumping-on-people' },
            { label: 'Separation anxiety', value: 'Separation anxiety', id: 'separation-anxiety' },
            { label: 'Inappropriate urination', value: 'Inappropriate urination', id: 'inappropriate-urination' },
            { label: 'Biting', value: 'Biting', id: 'biting' },
            { label: 'Aggression with other dogs', value: 'Aggression with other dogs', id: 'aggression-with-other-dogs' },
        ];
    };

    const getCommands = () => {
        return [
            { label: 'No commands yet', value: 'No commands yet', id: 'no-commands-yet' },
            { label: 'Follows basic commands', value: 'Follows basic commands', id: 'follows-basic-commands' },
        ];
    };

    const handleChange = (e) => {
        if (e.target.name === 'photos') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files
            });
            return;
        }
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Submitted successfully');
        setFormData({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
                <Grid item sm={4}>
                    <FormControl fullWidth>
                        <TextField id='dogName' label='Dog Name' name='dogName' value={formData.dogName || ''} onChange={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <TextField id='weight' type='number' label='Weight' name='weight' value={formData.weight || ''} onChange={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <TextField id='age' type='number' label='Age' name='age' value={formData.age || ''} onChange={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField id='description' multiline label='Description' name='description' value={formData.description || ''} onChange={handleChange} />
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id='gender-select'>Gender</InputLabel>
                        <Select labelId='gender-select' id='gender' label='Gender' name='gender' value={formData.gender || ''} onChange={handleChange}>
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id='infertile-select'>Spayed/Neutered</InputLabel>
                        <Select labelId='infertile-select' id='infertile' label='Spayed/Neutered' name='infertile' value={formData.infertile || ''} onChange={handleChange}>
                            <MenuItem value={'yes'}>Yes</MenuItem>
                            <MenuItem value={'no'}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <FormControl fullWidth>
                        <InputLabel id='personality-select'>Personality</InputLabel>
                        <Select labelId='personality-select' id='personality' label='Personality' name='personality' value={formData.personality || ''} onChange={handleChange}>
                            {getPersonality().map(item => {
                                return (
                                    <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id='traits-select'>Traits</InputLabel>
                        <Select labelId='traits-select' multiple id='traits' label='Traits' name='traits' value={formData.traits || []} onChange={handleChange}>
                            {getTraits().map(item => {
                                return (
                                    <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id='commands-select'>Commands</InputLabel>
                        <Select labelId='commands-select' multiple id='commands' label='Commands' name='commands' value={formData.commands || []} onChange={handleChange}>
                            {getCommands().map(item => {
                                return (
                                    <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel id='breed-select'>Breed</InputLabel>
                        <Select labelId='breed-select' multiple id='breed' label='Breed' name='breed' value={formData.breed || []} onChange={handleChange}>
                            {getBreed().map(item => {
                                return (
                                    <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel id='goodWith-select'>Good With</InputLabel>
                        <Select labelId='goodWith-select' multiple id='goodWith' label='Good With' name='goodWith' value={formData.goodWith || []} onChange={handleChange}>
                            {getGoodWith().map(item => {
                                return (
                                    <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel id='trained-select'>Trained For</InputLabel>
                        <Select labelId='trained-select' multiple id='trained' label='Trained For' name='trained' value={formData.trained || []} onChange={handleChange}>
                            {getTrained().map(item => {
                                return (
                                    <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <label htmlFor='input-photo'>
                            Photos
                            <Button id='input-photo' variant='contained' component='label'>
                                <input type='file' multiple name='photos' accept='image/*' onChange={handleChange} />
                            </Button>
                        </label>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' color='primary' type='submit'>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default Dogs;