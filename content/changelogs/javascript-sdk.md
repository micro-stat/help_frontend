---
title: Javascript SDK - Changelog
description: 'Find out about the recent changes to our javascript integration.'
---

[![npm version](https://badge.fury.io/js/micro-stat.svg)](https://badge.fury.io/js/micro-stat)

- This article shows the changes that have been made to the open source Javascript integration in each version.
- The Javascript SDK uses semver for version numbers.

## 0.8.0
- Added support for the new "Word Web" metric type

## 0.7.0
- Simplify connection by only requiring the DSN, not the URL to the API

## 0.6.0
- Automatically batch publication of Metrics with a 1 second delay.

## 0.5.0
- Make package work isomorphically by dynamically importing web vitals in browser environments

## 0.4.0
- Automatically publish web vitals when connecting to the integration.

## 0.3.0
- Added support for HitCounter metric type

## 0.2.0
- Ability to publish metrics to the Ingestion API

## 0.1.0
- Setup initial structure of repository