import { CircularProgress } from '@material-ui/core';
import { useEffect, useState } from "react";
import Questions from '../../components/Questions/Questions';
import './style.css'

export const Quiz = ({ questions, score, setScore, setQuestions })