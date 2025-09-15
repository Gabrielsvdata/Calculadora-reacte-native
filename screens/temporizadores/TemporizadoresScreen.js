
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const POMODORO_TIME = 20 * 60; // 20 minutes in seconds

export default function TemporizadoresScreen() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPomodoro, setIsPomodoro] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused) {
      if (isPomodoro) {
        if (time > 0) {
          interval = setInterval(() => {
            setTime(time => time - 1);
          }, 1000);
        } else {
          setIsActive(false);
        }
      } else {
        interval = setInterval(() => {
          setTime(time => time + 1);
        }, 1000);
      }
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused, time, isPomodoro]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
    setIsPomodoro(false);
    setTime(0);
  };

  const startPomodoro = () => {
    setIsActive(true);
    setIsPaused(false);
    setIsPomodoro(true);
    setTime(POMODORO_TIME);
  };

  const pauseTimer = () => {
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(time)}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Comum" onPress={startTimer} />
        <Button title="Pomodoro" onPress={startPomodoro} />
        <Button title={isPaused ? "Retomar" : "Pausar"} onPress={pauseTimer} disabled={!isActive} />
        <Button title="Resetar" onPress={resetTimer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
