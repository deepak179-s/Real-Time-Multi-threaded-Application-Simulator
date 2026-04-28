'use strict';
const pptxgen = require('pptxgenjs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = 'ThreadLab Team';
pres.title = 'ThreadLab: Real-Time Multi-threaded Application Simulator';

// ── Color Palette ──────────────────────────────────────────
const C = {
    bg_dark: '0A0D13',
    bg_card: '0F1117',
    bg_mid: '161B24',
    accent: '3B8CFF',
    accent2: '1A6DFF',
    green: '22C55E',
    amber: 'F59E0B',
    purple: 'A855F7',
    cyan: '06B6D4',
    text0: 'E8EAF0',
    text1: 'B0BAC8',
    text2: '6B7A94',
    white: 'FFFFFF',
    light_bg: 'F4F6FB',
};

const makeShadow = () => ({ type: 'outer', blur: 10, offset: 3, angle: 135, color: '000000', opacity: 0.18 });

// ══════════════════════════════════════════════════════════
// SLIDE 1 — TITLE SLIDE (Dark)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.bg_dark };

    // Left accent strip
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.28, h: 5.625, fill: { color: C.accent }, line: { color: C.accent } });

    // Decorative dot grid
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 12; col++) {
            s.addShape(pres.shapes.OVAL, {
                x: 1.2 + col * 0.72, y: 0.3 + row * 0.88, w: 0.05, h: 0.05,
                fill: { color: C.accent, transparency: 80 }, line: { color: C.accent, transparency: 80 }
            });
        }
    }

    // Logo box top-right
    s.addShape(pres.shapes.RECTANGLE, {
        x: 8.5, y: 0.3, w: 1.2, h: 1.2,
        fill: { color: C.accent }, line: { color: C.accent2 }, shadow: makeShadow()
    });
    s.addText('⬡', { x: 8.5, y: 0.3, w: 1.2, h: 1.2, fontSize: 40, color: C.white, align: 'center', valign: 'middle', margin: 0 });

    // University / App logo placeholder
    s.addShape(pres.shapes.RECTANGLE, {
        x: 1.1, y: 0.25, w: 1.4, h: 1.4,
        fill: { color: C.bg_mid }, line: { color: C.accent, width: 1.5 }
    });
    s.addText('[University / App Logo]', {
        x: 1.1, y: 0.25, w: 1.4, h: 1.4,
        fontSize: 8, color: C.text2, align: 'center', valign: 'middle', italic: true
    });

    // Main title
    s.addText('ThreadLab', {
        x: 0.5, y: 1.5, w: 9.2, h: 1.1,
        fontSize: 52, bold: true, color: C.white, fontFace: 'Calibri', align: 'left', margin: 0
    });
    s.addText('Real-Time Multi-threaded Application Simulator', {
        x: 0.5, y: 2.55, w: 8.5, h: 0.55,
        fontSize: 18, color: C.accent, fontFace: 'Calibri', align: 'left', margin: 0
    });

    // Subtitle tag
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.5, y: 3.2, w: 3.5, h: 0.4,
        fill: { color: C.accent, transparency: 85 }, line: { color: C.accent, width: 1 }
    });
    s.addText('Operating Systems Project Presentation', {
        x: 0.5, y: 3.2, w: 3.5, h: 0.4,
        fontSize: 11, color: C.accent, align: 'center', valign: 'middle', margin: 0
    });

    // Info cards
    const infos = [
        { label: 'Student Name', val: '[Your Name Here]' },
        { label: 'Roll Number', val: '[Roll No.]' },
        { label: 'Instructor', val: '[Prof. Name]' },
    ];
    infos.forEach((info, i) => {
        const x = 0.5 + i * 3.2;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y: 3.85, w: 3.0, h: 0.75,
            fill: { color: C.bg_card }, line: { color: C.text2, width: 0.5 }, shadow: makeShadow()
        });
        s.addText(info.label, { x, y: 3.88, w: 3.0, h: 0.22, fontSize: 8, color: C.text2, align: 'center' });
        s.addText(info.val, { x, y: 4.08, w: 3.0, h: 0.28, fontSize: 11, color: C.text0, align: 'center', bold: true });
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 2 — PROBLEM STATEMENT & GOAL (Light)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.light_bg };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText('Problem Statement & Goal', {
        x: 0.5, y: 0.25, w: 9, h: 0.7, fontSize: 28, bold: true, color: C.bg_dark, fontFace: 'Calibri', margin: 0
    });

    // Left card — Problem
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 1.05, w: 4.4, h: 4.0,
        fill: { color: C.white }, line: { color: 'E2E8F0' }, shadow: makeShadow()
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.05, w: 4.4, h: 0.15, fill: { color: '3B82F6' }, line: { color: '3B82F6' } });
    s.addText('⚠  Problem Statement', { x: 0.55, y: 1.25, w: 4.1, h: 0.4, fontSize: 14, bold: true, color: '3B82F6', margin: 0 });
    s.addText([
        { text: 'Demonstrate multithreading models:', options: { bold: true, breakLine: true } },
        { text: '  • Many-to-One (M:1)', options: { breakLine: true } },
        { text: '  • One-to-One (1:1)', options: { breakLine: true } },
        { text: '  • Many-to-Many (M:N)', options: { breakLine: true, paraSpaceAfter: 8 } },
        { text: 'Simulate thread synchronization:', options: { bold: true, breakLine: true } },
        { text: '  • Semaphores, Monitors, Barriers', options: { breakLine: true, paraSpaceAfter: 8 } },
        { text: 'Visualize CPU scheduling with real-time execution traces.', options: {} },
    ], { x: 0.55, y: 1.7, w: 4.1, h: 3.15, fontSize: 12, color: '1E293B', valign: 'top' });

    // Right card — Goal
    s.addShape(pres.shapes.RECTANGLE, {
        x: 5.2, y: 1.05, w: 4.4, h: 4.0,
        fill: { color: C.white }, line: { color: 'E2E8F0' }, shadow: makeShadow()
    });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.05, w: 4.4, h: 0.15, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText('🎯  Project Goal', { x: 5.35, y: 1.25, w: 4.1, h: 0.4, fontSize: 14, bold: true, color: C.accent, margin: 0 });
    s.addText([
        { text: 'Build an interactive educational simulator that:', options: { bold: true, breakLine: true } },
        { text: '  • Helps users understand OS concurrency concepts', options: { breakLine: true } },
        { text: '  • Visually maps threads to kernel resources', options: { breakLine: true } },
        { text: '  • Shows live state transitions & scheduling', options: { breakLine: true, paraSpaceAfter: 8 } },
        { text: 'Runs on:', options: { bold: true, breakLine: true } },
        { text: '  • Electron desktop application', options: { breakLine: true } },
        { text: '  • Deployable static web application', options: {} },
    ], { x: 5.35, y: 1.7, w: 4.1, h: 3.15, fontSize: 12, color: '1E293B', valign: 'top' });
}

// ══════════════════════════════════════════════════════════
// SLIDE 3 — EXPECTED OUTCOME & SCOPE (Dark)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.bg_dark };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.purple }, line: { color: C.purple } });
    s.addText('Expected Outcome & Scope', {
        x: 0.5, y: 0.25, w: 9, h: 0.65, fontSize: 28, bold: true, color: C.white, fontFace: 'Calibri', margin: 0
    });

    // 3 outcome cards (removed deadlock, now 3 core features)
    const outcomes = [
        { icon: '⬡', label: 'Threading Models', desc: 'Live M:1 / 1:1 / M:N visual thread mapping', col: C.accent },
        { icon: '⚙', label: 'Synchronization', desc: 'Semaphores, Monitors & Barrier primitives', col: C.green },
        { icon: '⏱', label: 'CPU Scheduling', desc: 'FCFS, SJF, Priority & Round Robin', col: C.amber },
    ];
    outcomes.forEach((o, i) => {
        const x = 0.5 + i * 3.08;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y: 1.05, w: 2.85, h: 1.85,
            fill: { color: C.bg_mid }, line: { color: o.col, width: 1 }, shadow: makeShadow()
        });
        s.addShape(pres.shapes.RECTANGLE, { x, y: 1.05, w: 2.85, h: 0.13, fill: { color: o.col }, line: { color: o.col } });
        s.addText(o.icon, { x, y: 1.22, w: 2.85, h: 0.55, fontSize: 28, color: o.col, align: 'center' });
        s.addText(o.label, { x: x + 0.1, y: 1.8, w: 2.65, h: 0.38, fontSize: 12.5, bold: true, color: C.text0, align: 'center' });
        s.addText(o.desc, { x: x + 0.1, y: 2.16, w: 2.65, h: 0.6, fontSize: 10, color: C.text1, align: 'center', italic: true });
    });

    // Scope card left
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 3.1, w: 5.6, h: 1.18,
        fill: { color: C.bg_mid }, line: { color: C.text2, width: 0.5 }
    });
    s.addText('📋  In Scope', { x: 0.55, y: 3.16, w: 5.3, h: 0.3, fontSize: 12, bold: true, color: C.text1 });
    s.addText([
        { text: '✓ Thread lifecycle & state transitions   ✓ Synchronization primitives', options: { breakLine: true } },
        { text: '✓ CPU scheduling algorithms              ✓ Desktop + Web deployment', options: {} },
    ], { x: 0.55, y: 3.48, w: 5.3, h: 0.68, fontSize: 11, color: C.text1 });

    // Out of scope
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 4.38, w: 9.2, h: 0.88,
        fill: { color: C.amber, transparency: 90 }, line: { color: C.amber, width: 1 }
    });
    s.addText('⚠  Out of Scope: Does NOT create actual OS kernel threads. Deadlock simulation has been removed from the current version.', {
        x: 0.55, y: 4.43, w: 9.0, h: 0.78, fontSize: 10.5, color: C.amber, italic: true, valign: 'middle'
    });

    // Screenshot placeholder
    s.addShape(pres.shapes.RECTANGLE, {
        x: 6.2, y: 3.1, w: 3.4, h: 1.18,
        fill: { color: C.bg_card }, line: { color: C.accent, width: 1.5 }
    });
    s.addText('[Screenshot: ThreadLab Simulator UI]', {
        x: 6.2, y: 3.1, w: 3.4, h: 1.18,
        fontSize: 9, color: C.text2, align: 'center', valign: 'middle', italic: true
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 4 — SYSTEM ARCHITECTURE & FLOW (Light)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.light_bg };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.cyan }, line: { color: C.cyan } });
    s.addText('System Architecture & Flow', {
        x: 0.5, y: 0.25, w: 9, h: 0.65, fontSize: 28, bold: true, color: C.bg_dark, fontFace: 'Calibri', margin: 0
    });

    // Top flow row
    const flowItems = [
        { label: 'User Opens\nThreadLab', color: C.accent },
        { label: 'GUI\nModule', color: C.purple },
        { label: 'User Selects\nOptions', color: C.accent },
        { label: 'Simulation\nEngine', color: C.green },
        { label: 'Visualization\nModule', color: C.amber },
    ];
    flowItems.forEach((f, i) => {
        const x = 0.35 + i * 1.88;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y: 1.05, w: 1.7, h: 0.9,
            fill: { color: f.color, transparency: 85 }, line: { color: f.color, width: 1.5 }, shadow: makeShadow()
        });
        s.addText(f.label, { x, y: 1.05, w: 1.7, h: 0.9, fontSize: 9.5, bold: true, color: '1E293B', align: 'center', valign: 'middle' });
        if (i < flowItems.length - 1) {
            s.addShape(pres.shapes.LINE, { x: x + 1.7, y: 1.5, w: 0.18, h: 0, line: { color: '94A3B8', width: 1.5 } });
        }
    });

    // Engine sub-modules (3 only — no deadlock)
    const subs = [
        { label: 'Threading Model Logic', color: C.accent },
        { label: 'Synchronization Logic', color: C.green },
        { label: 'CPU Scheduler Logic', color: C.amber },
    ];
    subs.forEach((sub, i) => {
        const x = 1.35 + i * 2.55;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y: 2.22, w: 2.35, h: 0.62,
            fill: { color: sub.color, transparency: 88 }, line: { color: sub.color, width: 1 }
        });
        s.addText(sub.label, { x, y: 2.22, w: 2.35, h: 0.62, fontSize: 9.5, color: '1E293B', align: 'center', valign: 'middle', bold: true });
    });
    s.addText('↑ Simulation Engine Sub-Modules', { x: 0.35, y: 2.86, w: 9.5, h: 0.25, fontSize: 9, color: '94A3B8', align: 'center', italic: true });

    // State snapshot + viz outputs
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.35, y: 3.28, w: 2.2, h: 0.65,
        fill: { color: C.bg_mid }, line: { color: '475569' }
    });
    s.addText('State Snapshot', { x: 0.35, y: 3.28, w: 2.2, h: 0.65, fontSize: 10, color: C.text0, align: 'center', valign: 'middle', bold: true });

    const vizOuts = ['Mapping Diagram', 'Logs & Status', 'Scheduler View'];
    vizOuts.forEach((v, i) => {
        const x = 2.75 + i * 2.3;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y: 3.28, w: 2.1, h: 0.65,
            fill: { color: C.amber, transparency: 88 }, line: { color: C.amber, width: 0.8 }
        });
        s.addText(v, { x, y: 3.28, w: 2.1, h: 0.65, fontSize: 10, color: '1E293B', align: 'center', valign: 'middle' });
    });
    s.addShape(pres.shapes.LINE, { x: 2.55, y: 3.6, w: 0.2, h: 0, line: { color: '94A3B8', width: 1 } });

    // Real-time feedback row
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.35, y: 4.12, w: 9.3, h: 0.6,
        fill: { color: C.accent, transparency: 90 }, line: { color: C.accent, width: 1 }
    });
    s.addText('⟳  Real-Time User Feedback Loop', {
        x: 0.35, y: 4.12, w: 9.3, h: 0.6, fontSize: 11, color: C.accent, align: 'center', valign: 'middle', bold: true
    });

    // Architecture diagram placeholder
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.35, y: 4.82, w: 9.3, h: 0.5,
        fill: { color: 'E8F4FD' }, line: { color: C.cyan, width: 1.5 }
    });
    s.addText('[INSERT: Flowchart / Architecture Diagram]', {
        x: 0.35, y: 4.82, w: 9.3, h: 0.5,
        fontSize: 9, color: '64748B', align: 'center', valign: 'middle', italic: true
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 5 — MODULE 1: GUI & USER INTERACTION (Dark)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.bg_dark };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.purple }, line: { color: C.purple } });
    s.addText('Module 1 — GUI & User Interaction', {
        x: 0.5, y: 0.25, w: 8, h: 0.65, fontSize: 26, bold: true, color: C.white, fontFace: 'Calibri', margin: 0
    });
    s.addShape(pres.shapes.RECTANGLE, {
        x: 8.3, y: 0.3, w: 1.3, h: 0.45,
        fill: { color: C.purple, transparency: 70 }, line: { color: C.purple }
    });
    s.addText('MODULE 01', { x: 8.3, y: 0.3, w: 1.3, h: 0.45, fontSize: 9, color: C.white, align: 'center', valign: 'middle', bold: true });

    // Left features card
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 1.05, w: 5.5, h: 3.2,
        fill: { color: C.bg_card }, line: { color: C.purple, width: 1 }, shadow: makeShadow()
    });
    s.addText('Key Features', { x: 0.55, y: 1.15, w: 5.2, h: 0.35, fontSize: 13, bold: true, color: C.purple });
    s.addText([
        { text: 'Tab-based layout: Threading Models, Synchronization, CPU Scheduler', options: { bullet: true, breakLine: true } },
        { text: 'Model selector with Run / Stop / Reset / Add Thread controls', options: { bullet: true, breakLine: true } },
        { text: 'Speed slider for real-time simulation control', options: { bullet: true, breakLine: true } },
        { text: 'Desktop vs. Web runtime detection badge', options: { bullet: true, breakLine: true } },
        { text: 'Live activity logs per simulation tab', options: { bullet: true } },
    ], { x: 0.55, y: 1.55, w: 5.1, h: 2.55, fontSize: 11.5, color: C.text1, valign: 'top' });

    // Right: usage + screenshot
    s.addShape(pres.shapes.RECTANGLE, {
        x: 6.1, y: 1.05, w: 3.5, h: 1.35,
        fill: { color: C.bg_mid }, line: { color: C.purple, width: 0.8 }
    });
    s.addText('Usage Example', { x: 6.2, y: 1.1, w: 3.3, h: 0.3, fontSize: 11, bold: true, color: C.purple });
    s.addText([
        { text: '1. Select "Many-to-Many" model', options: { breakLine: true } },
        { text: '2. Set speed slider to 7x', options: { breakLine: true } },
        { text: '3. Click ▶ Run — observe live thread mapping', options: {} },
    ], { x: 6.2, y: 1.42, w: 3.3, h: 0.9, fontSize: 10, color: C.text1 });

    s.addShape(pres.shapes.RECTANGLE, {
        x: 6.1, y: 2.55, w: 3.5, h: 1.7,
        fill: { color: C.bg_card }, line: { color: C.purple, width: 1.5 }
    });
    s.addText('[Screenshot: Threading Models Tab]', {
        x: 6.1, y: 2.55, w: 3.5, h: 1.7,
        fontSize: 8.5, color: C.text2, align: 'center', valign: 'middle', italic: true
    });

    // Purpose note
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 4.38, w: 9.2, h: 0.9,
        fill: { color: C.purple, transparency: 90 }, line: { color: C.purple, width: 1 }
    });
    s.addText('🎯  Purpose: Serves as the Presentation Layer — collects user input and renders simulation state in real-time across 3 tabs.', {
        x: 0.55, y: 4.43, w: 9.0, h: 0.8, fontSize: 11, color: C.purple, valign: 'middle', italic: true
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 6 — MODULE 2: SIMULATION ENGINE (Light)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.light_bg };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.green }, line: { color: C.green } });
    s.addText('Module 2 — Simulation Engine', {
        x: 0.5, y: 0.25, w: 8, h: 0.65, fontSize: 26, bold: true, color: C.bg_dark, fontFace: 'Calibri', margin: 0
    });
    s.addShape(pres.shapes.RECTANGLE, {
        x: 8.3, y: 0.3, w: 1.3, h: 0.45,
        fill: { color: C.green, transparency: 70 }, line: { color: C.green }
    });
    s.addText('MODULE 02', { x: 8.3, y: 0.3, w: 1.3, h: 0.45, fontSize: 9, color: C.white, align: 'center', valign: 'middle', bold: true });

    // 3 engine columns
    const cols = [
        {
            title: 'Threading Models', color: C.accent, icon: '⬡',
            items: ['Many-to-One (M:1) — sequential, single KT', 'One-to-One (1:1) — true parallelism', 'Many-to-Many (M:N) — multiplexed KTs', 'Dynamic thread pool addition']
        },
        {
            title: 'Synchronization', color: C.green, icon: '⚙',
            items: ['Semaphore — counter-based access control', 'Monitor — producer/consumer pattern', 'Barrier — wait-for-all synchronization', 'Blocked / waiting state modeling']
        },
        {
            title: 'CPU Scheduling', color: C.amber, icon: '⏱',
            items: ['FCFS — First Come First Served', 'SJF — Shortest Job First', 'Priority Scheduling', 'Round Robin (configurable quantum)']
        },
    ];
    cols.forEach((c, i) => {
        const x = 0.35 + i * 3.12;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y: 1.05, w: 2.95, h: 2.7,
            fill: { color: C.white }, line: { color: 'E2E8F0' }, shadow: makeShadow()
        });
        s.addShape(pres.shapes.RECTANGLE, { x, y: 1.05, w: 2.95, h: 0.13, fill: { color: c.color }, line: { color: c.color } });
        s.addText(c.icon + '  ' + c.title, { x: x + 0.1, y: 1.22, w: 2.75, h: 0.4, fontSize: 12, bold: true, color: c.color });
        c.items.forEach((item, j) => {
            s.addText('› ' + item, { x: x + 0.1, y: 1.68 + j * 0.48, w: 2.75, h: 0.4, fontSize: 10, color: '334155' });
        });
    });

    // Thread state machine
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.35, y: 3.9, w: 5.6, h: 1.4,
        fill: { color: C.white }, line: { color: 'E2E8F0' }, shadow: makeShadow()
    });
    s.addText('Thread State Transitions', { x: 0.5, y: 3.98, w: 5.3, h: 0.3, fontSize: 11, bold: true, color: C.bg_dark });
    const states = [
        { label: 'NEW', color: '94A3B8', x: 0.55 },
        { label: 'READY', color: C.accent, x: 1.55 },
        { label: 'RUNNING', color: C.green, x: 2.75 },
        { label: 'WAITING', color: C.amber, x: 3.95 },
        { label: 'DONE', color: '94A3B8', x: 5.05 },
    ];
    states.forEach((st, i) => {
        s.addShape(pres.shapes.RECTANGLE, {
            x: st.x, y: 4.35, w: 0.9, h: 0.32,
            fill: { color: st.color, transparency: 80 }, line: { color: st.color, width: 1 }
        });
        s.addText(st.label, { x: st.x, y: 4.35, w: 0.9, h: 0.32, fontSize: 7.5, color: '1E293B', align: 'center', valign: 'middle', bold: true });
        if (i < states.length - 1) {
            s.addShape(pres.shapes.LINE, { x: st.x + 0.9, y: 4.51, w: 0.15, h: 0, line: { color: '94A3B8', width: 1 } });
        }
    });

    // Diagram placeholder
    s.addShape(pres.shapes.RECTANGLE, {
        x: 6.1, y: 3.9, w: 3.5, h: 1.4,
        fill: { color: 'E8F4FD' }, line: { color: C.green, width: 1.5 }
    });
    s.addText('[Diagram: Thread State Transition Machine]', {
        x: 6.1, y: 3.9, w: 3.5, h: 1.4,
        fontSize: 9, color: '64748B', align: 'center', valign: 'middle', italic: true
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 7 — MODULE 3: VISUALIZATION (Dark)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.bg_dark };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.amber }, line: { color: C.amber } });
    s.addText('Module 3 — Visualization & Analysis', {
        x: 0.5, y: 0.25, w: 8, h: 0.65, fontSize: 26, bold: true, color: C.white, fontFace: 'Calibri', margin: 0
    });
    s.addShape(pres.shapes.RECTANGLE, {
        x: 8.3, y: 0.3, w: 1.3, h: 0.45,
        fill: { color: C.amber, transparency: 70 }, line: { color: C.amber }
    });
    s.addText('MODULE 03', { x: 8.3, y: 0.3, w: 1.3, h: 0.45, fontSize: 9, color: C.white, align: 'center', valign: 'middle', bold: true });

    // 3 viz feature cards
    const vizCards = [
        { icon: '⬡', label: 'Thread Mapping Canvas', desc: 'SVG diagram — real-time U→K thread assignment view', color: C.accent },
        { icon: '▶', label: 'Gantt Chart', desc: 'CPU time allocation per process, tick-by-tick', color: C.amber },
        { icon: '●', label: 'State Chips & Progress', desc: 'Color-coded ready/running/waiting/done chips + bars', color: C.green },
    ];
    vizCards.forEach((v, i) => {
        const x = 0.5 + i * 3.08;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y: 1.05, w: 2.85, h: 2.1,
            fill: { color: C.bg_mid }, line: { color: v.color, width: 1 }, shadow: makeShadow()
        });
        s.addShape(pres.shapes.RECTANGLE, { x, y: 1.05, w: 2.85, h: 0.13, fill: { color: v.color }, line: { color: v.color } });
        s.addText(v.icon, { x, y: 1.22, w: 2.85, h: 0.55, fontSize: 28, color: v.color, align: 'center' });
        s.addText(v.label, { x: x + 0.1, y: 1.8, w: 2.65, h: 0.38, fontSize: 11, bold: true, color: C.text0, align: 'center' });
        s.addText(v.desc, { x: x + 0.1, y: 2.16, w: 2.65, h: 0.7, fontSize: 9.5, color: C.text1, align: 'center', italic: true });
    });

    // Purpose note
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 3.3, w: 5.5, h: 0.9,
        fill: { color: C.amber, transparency: 90 }, line: { color: C.amber, width: 1 }
    });
    s.addText('🎯  Purpose: Converts raw simulation state into interactive diagrams — making abstract OS concurrency concepts visible and learnable.', {
        x: 0.55, y: 3.35, w: 5.3, h: 0.8, fontSize: 10.5, color: C.amber, valign: 'middle', italic: true
    });

    // Placeholders
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 4.32, w: 5.5, h: 0.98,
        fill: { color: C.bg_card }, line: { color: C.amber, width: 1.5 }
    });
    s.addText('[Screenshot: Gantt Chart / Scheduler View]', {
        x: 0.4, y: 4.32, w: 5.5, h: 0.98,
        fontSize: 9, color: C.text2, align: 'center', valign: 'middle', italic: true
    });

    s.addShape(pres.shapes.RECTANGLE, {
        x: 6.1, y: 3.3, w: 3.5, h: 2.0,
        fill: { color: C.bg_card }, line: { color: C.green, width: 1.5 }
    });
    s.addText('[Screenshot: Synchronization / Thread Mapping View]', {
        x: 6.1, y: 3.3, w: 3.5, h: 2.0,
        fontSize: 9, color: C.text2, align: 'center', valign: 'middle', italic: true
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 8 — TECHNOLOGIES USED (Light)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.light_bg };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText('Technologies Used', {
        x: 0.5, y: 0.25, w: 9, h: 0.65, fontSize: 28, bold: true, color: C.bg_dark, fontFace: 'Calibri', margin: 0
    });

    const techGroups = [
        {
            title: 'Languages', color: C.accent,
            items: [
                { name: 'JavaScript', detail: 'Core simulation & UI logic' },
                { name: 'HTML5', detail: 'Application structure' },
                { name: 'CSS3', detail: 'Styling & animations' },
            ]
        },
        {
            title: 'Framework & Tools', color: C.purple,
            items: [
                { name: 'Electron', detail: 'Desktop application shell' },
                { name: 'Node.js', detail: 'Runtime environment' },
                { name: 'SVG', detail: 'Interactive visualizations' },
            ]
        },
        {
            title: 'Deployment', color: C.green,
            items: [
                { name: 'Vercel', detail: 'Static web hosting' },
                { name: 'Render', detail: 'Hosting alternative' },
                { name: 'Static Server', detail: 'Local preview script' },
            ]
        },
    ];
    techGroups.forEach((g, gi) => {
        const x = 0.35 + gi * 3.12;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y: 1.05, w: 2.95, h: 3.0,
            fill: { color: C.white }, line: { color: 'E2E8F0' }, shadow: makeShadow()
        });
        s.addShape(pres.shapes.RECTANGLE, { x, y: 1.05, w: 2.95, h: 0.15, fill: { color: g.color }, line: { color: g.color } });
        s.addText(g.title, { x: x + 0.12, y: 1.24, w: 2.7, h: 0.4, fontSize: 13, bold: true, color: g.color });
        g.items.forEach((item, i) => {
            const iy = 1.72 + i * 0.78;
            s.addShape(pres.shapes.RECTANGLE, {
                x: x + 0.12, y: iy, w: 2.72, h: 0.65,
                fill: { color: g.color, transparency: 92 }, line: { color: g.color, width: 0.5 }
            });
            s.addText(item.name, { x: x + 0.22, y: iy + 0.05, w: 2.5, h: 0.28, fontSize: 11.5, bold: true, color: '1E293B' });
            s.addText(item.detail, { x: x + 0.22, y: iy + 0.33, w: 2.5, h: 0.25, fontSize: 9.5, color: '475569', italic: true });
        });
    });

    // Logo placeholder
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.35, y: 4.2, w: 9.3, h: 1.1,
        fill: { color: 'E8F4FD' }, line: { color: C.accent, width: 1.5 }
    });
    s.addText('[INSERT: Tech Logos — JavaScript | HTML | CSS | Electron | Node.js | GitHub]', {
        x: 0.35, y: 4.2, w: 9.3, h: 1.1,
        fontSize: 10, color: '64748B', align: 'center', valign: 'middle', italic: true
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 9 — GITHUB WORKFLOW (Dark)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.bg_dark };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.cyan }, line: { color: C.cyan } });
    s.addText('GitHub Workflow & Revision Tracking', {
        x: 0.5, y: 0.25, w: 9, h: 0.65, fontSize: 26, bold: true, color: C.white, fontFace: 'Calibri', margin: 0
    });

    // Branch timeline
    const branches = [
        { name: 'main', color: C.green, y: 1.15 },
        { name: 'feature/shared-runtime', color: C.accent, y: 1.6 },
        { name: 'feature/web-deploy', color: C.purple, y: 2.05 },
        { name: 'feature/docs-polish', color: C.amber, y: 2.5 },
        { name: 'feature/macos-dmg', color: C.cyan, y: 2.95 },
    ];
    s.addShape(pres.shapes.LINE, { x: 0.7, y: 1.35, w: 0, h: 2.2, line: { color: C.green, width: 2.5 } });
    branches.forEach(b => {
        s.addShape(pres.shapes.OVAL, { x: 0.6, y: b.y + 0.08, w: 0.22, h: 0.22, fill: { color: b.color }, line: { color: b.color } });
        if (b.name !== 'main') {
            s.addShape(pres.shapes.LINE, { x: 0.82, y: b.y + 0.19, w: 0.4, h: 0, line: { color: b.color, width: 1.5 } });
        }
        s.addShape(pres.shapes.RECTANGLE, {
            x: 1.25, y: b.y, w: 2.5, h: 0.38,
            fill: { color: b.color, transparency: 85 }, line: { color: b.color, width: 0.8 }
        });
        s.addText(b.name, { x: 1.28, y: b.y, w: 2.45, h: 0.38, fontSize: 9.5, color: C.text0, fontFace: 'Consolas', valign: 'middle' });
    });

    // Commits table
    s.addShape(pres.shapes.RECTANGLE, {
        x: 4.0, y: 1.05, w: 5.6, h: 3.05,
        fill: { color: C.bg_card }, line: { color: C.text2, width: 0.5 }, shadow: makeShadow()
    });
    s.addText('Revision History (9 commits)', { x: 4.1, y: 1.1, w: 5.4, h: 0.32, fontSize: 11, bold: true, color: C.cyan });

    const commits = [
        ['7d030e9', 'Initial commit'],
        ['e8e5ad8', 'refactor: shared app shell'],
        ['9af6c1c', 'merge: shared runtime support'],
        ['4252e8c', 'feat: static hosting support'],
        ['8c99409', 'fix: remove dependency churn'],
        ['c547afd', 'merge: web deployment support'],
        ['d1d5250', 'chore: dual-mode launch scripts'],
        ['9e33793', 'docs: deployment workflows'],
        ['de3c025', 'merge: dual-mode docs'],
    ];
    commits.forEach((c, i) => {
        const cy = 1.48 + i * 0.27;
        s.addShape(pres.shapes.RECTANGLE, {
            x: 4.08, y: cy, w: 1.0, h: 0.22,
            fill: { color: C.accent, transparency: 85 }, line: { color: C.accent, width: 0.4 }
        });
        s.addText(c[0], { x: 4.08, y: cy, w: 1.0, h: 0.22, fontSize: 7.5, color: C.accent, fontFace: 'Consolas', align: 'center', valign: 'middle' });
        s.addText(c[1], { x: 5.15, y: cy, w: 4.35, h: 0.22, fontSize: 9, color: C.text1, valign: 'middle' });
    });

    // Footer
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 4.28, w: 9.2, h: 0.95,
        fill: { color: C.cyan, transparency: 92 }, line: { color: C.cyan, width: 1 }
    });
    s.addText('🔗  github.com/deepak179-s/threadlab  ·  9 revisions  ·  Feature-based branching workflow', {
        x: 0.55, y: 4.33, w: 9.0, h: 0.8, fontSize: 10.5, color: C.cyan, valign: 'middle'
    });

    s.addShape(pres.shapes.RECTANGLE, {
        x: 4.0, y: 4.28, w: 5.6, h: 0.95,
        fill: { color: C.bg_card }, line: { color: C.cyan, width: 1.5 }
    });
    s.addText('[Screenshot: GitHub Repo / Commit History]', {
        x: 4.0, y: 4.28, w: 5.6, h: 0.95,
        fontSize: 8.5, color: C.text2, align: 'center', valign: 'middle', italic: true
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 10 — CONCLUSION (Dark)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.bg_dark };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.green }, line: { color: C.green } });
    s.addText('Conclusion', {
        x: 0.5, y: 0.25, w: 9, h: 0.65, fontSize: 28, bold: true, color: C.white, fontFace: 'Calibri', margin: 0
    });

    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 1.05, w: 9.2, h: 1.4,
        fill: { color: C.accent, transparency: 90 }, line: { color: C.accent, width: 1.5 }
    });
    s.addText('"ThreadLab successfully demonstrates threading models, synchronization primitives, and CPU scheduling through an interactive, visual simulator."', {
        x: 0.6, y: 1.15, w: 8.8, h: 1.15,
        fontSize: 14, color: C.accent, italic: true, align: 'center', valign: 'middle'
    });

    const achievements = [
        { icon: '✓', label: 'Educational Value', desc: 'Thread models, synchronization & scheduling made visual', color: C.green },
        { icon: '✓', label: 'Full Stack Sim', desc: 'Desktop (Electron) + deployable web application', color: C.accent },
        { icon: '✓', label: 'Solid Git Workflow', desc: '9 commits, 5 branches, clean feature-based history', color: C.purple },
    ];
    achievements.forEach((a, i) => {
        const x = 0.4 + i * 3.15;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y: 2.65, w: 2.9, h: 1.5,
            fill: { color: C.bg_mid }, line: { color: a.color, width: 1 }, shadow: makeShadow()
        });
        s.addShape(pres.shapes.RECTANGLE, { x, y: 2.65, w: 2.9, h: 0.13, fill: { color: a.color }, line: { color: a.color } });
        s.addText(a.icon + ' ' + a.label, { x: x + 0.1, y: 2.82, w: 2.7, h: 0.4, fontSize: 12, bold: true, color: a.color });
        s.addText(a.desc, { x: x + 0.1, y: 3.23, w: 2.7, h: 0.75, fontSize: 10.5, color: C.text1, italic: true });
    });

    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 4.32, w: 9.2, h: 0.95,
        fill: { color: C.bg_card }, line: { color: C.text2, width: 0.5 }
    });
    s.addText('The project follows a structured GitHub workflow and satisfies all OS concurrency simulation requirements with a clean, modular 3-layer architecture (GUI → Engine → Visualization).', {
        x: 0.55, y: 4.37, w: 9.0, h: 0.8, fontSize: 11, color: C.text1, valign: 'middle'
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 11 — FUTURE SCOPE (Light)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.light_bg };

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.amber }, line: { color: C.amber } });
    s.addText('Future Scope', {
        x: 0.5, y: 0.25, w: 9, h: 0.65, fontSize: 28, bold: true, color: C.bg_dark, fontFace: 'Calibri', margin: 0
    });

    const futures = [
        { n: '01', label: 'Export Logs & Data', desc: 'Export simulation data to JSON / CSV for offline analysis', color: C.accent },
        { n: '02', label: 'More Scheduling Algorithms', desc: 'Multilevel Queue (MLQ) and Multilevel Feedback Queue (MLFQ)', color: C.green },
        { n: '03', label: 'Installer Branding', desc: 'Custom application icons and polished Electron desktop installer', color: C.purple },
        { n: '04', label: 'Test Automation', desc: 'Automated correctness tests for all simulation engines', color: C.amber },
        { n: '05', label: 'Public Web Demo', desc: 'Hosted demo with tutorial mode, analytics & shareable links', color: C.cyan },
        { n: '06', label: 'Deadlock Module (Future)', desc: 'Add deadlock detection & resolution as a future optional feature', color: '94A3B8' },
    ];

    futures.forEach((f, i) => {
        const col = i % 2, row = Math.floor(i / 2);
        const x = 0.35 + col * 4.85;
        const y = 1.05 + row * 1.2;
        s.addShape(pres.shapes.RECTANGLE, {
            x, y, w: 4.6, h: 1.05,
            fill: { color: C.white }, line: { color: 'E2E8F0' }, shadow: makeShadow()
        });
        s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.12, h: 1.05, fill: { color: f.color }, line: { color: f.color } });
        s.addShape(pres.shapes.RECTANGLE, {
            x: x + 0.18, y: y + 0.12, w: 0.42, h: 0.42,
            fill: { color: f.color, transparency: 80 }, line: { color: f.color }
        });
        s.addText(f.n, { x: x + 0.18, y: y + 0.12, w: 0.42, h: 0.42, fontSize: 10, bold: true, color: f.color, align: 'center', valign: 'middle' });
        s.addText(f.label, { x: x + 0.7, y: y + 0.08, w: 3.8, h: 0.3, fontSize: 11.5, bold: true, color: '1E293B' });
        s.addText(f.desc, { x: x + 0.7, y: y + 0.38, w: 3.8, h: 0.5, fontSize: 9.5, color: '475569', italic: true });
    });

    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.35, y: 4.72, w: 9.3, h: 0.6,
        fill: { color: 'E8F4FD' }, line: { color: C.cyan, width: 1.5 }
    });
    s.addText('[INSERT: Illustration — Future Web/Cloud Integration Vision]', {
        x: 0.35, y: 4.72, w: 9.3, h: 0.6,
        fontSize: 9, color: '64748B', align: 'center', valign: 'middle', italic: true
    });
}

// ══════════════════════════════════════════════════════════
// SLIDE 12 — REFERENCES & Q&A (Dark)
// ══════════════════════════════════════════════════════════
{
    const s = pres.addSlide();
    s.background = { color: C.bg_dark };

    // Decorative dots
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 12; col++) {
            s.addShape(pres.shapes.OVAL, {
                x: 0.2 + col * 0.8, y: 0.3 + row * 0.88, w: 0.05, h: 0.05,
                fill: { color: C.accent, transparency: 85 }, line: { color: C.accent, transparency: 85 }
            });
        }
    }

    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.18, fill: { color: C.accent }, line: { color: C.accent } });
    s.addText('References & Q&A', {
        x: 0.5, y: 0.25, w: 9, h: 0.65, fontSize: 28, bold: true, color: C.white, fontFace: 'Calibri', margin: 0
    });

    // Refs card
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 1.05, w: 6.0, h: 3.15,
        fill: { color: C.bg_card }, line: { color: C.text2, width: 0.5 }, shadow: makeShadow()
    });
    s.addText('References', { x: 0.55, y: 1.12, w: 5.8, h: 0.35, fontSize: 13, bold: true, color: C.accent });

    const refs = [
        '[1]  MultiThreaded_Simulator_ProjectDoc.pdf (Assignment Reference)',
        '[2]  Electron Documentation — electronjs.org/docs',
        '[3]  GitHub Documentation — docs.github.com',
        '[4]  Vercel Documentation — vercel.com/docs',
        '[5]  Render Documentation — render.com/docs',
        '[6]  MDN Web Docs — developer.mozilla.org',
    ];
    refs.forEach((r, i) => {
        s.addText(r, { x: 0.55, y: 1.52 + i * 0.42, w: 5.7, h: 0.35, fontSize: 10, color: C.text1 });
    });

    // Q&A card
    s.addShape(pres.shapes.RECTANGLE, {
        x: 6.6, y: 1.05, w: 3.0, h: 3.15,
        fill: { color: C.accent2, transparency: 88 }, line: { color: C.accent, width: 1.5 }, shadow: makeShadow()
    });
    s.addText('?', { x: 6.6, y: 1.2, w: 3.0, h: 1.5, fontSize: 88, color: C.accent, align: 'center', fontFace: 'Calibri', bold: true });
    s.addText('Thank You!', { x: 6.6, y: 2.7, w: 3.0, h: 0.5, fontSize: 20, bold: true, color: C.white, align: 'center' });
    s.addText('Questions Welcome', { x: 6.6, y: 3.22, w: 3.0, h: 0.35, fontSize: 11, color: C.text1, align: 'center', italic: true });

    // Footer
    s.addShape(pres.shapes.RECTANGLE, {
        x: 0.4, y: 4.35, w: 9.2, h: 0.95,
        fill: { color: C.bg_card }, line: { color: C.text2, width: 0.5 }
    });
    s.addText([
        { text: 'ThreadLab: Real-Time Multi-threaded Application Simulator', options: { bold: true, breakLine: true } },
        { text: 'GitHub: github.com/deepak179-s/threadlab  ·  Operating Systems Project Presentation', options: { italic: true } },
    ], { x: 0.55, y: 4.4, w: 9.0, h: 0.8, fontSize: 10, color: C.text2, align: 'center', valign: 'middle' });
}

// ── Write ──────────────────────────────────────────────────
pres.writeFile({ fileName: './ThreadLab_Presentation_v2.pptx' })
    .then(() => console.log('✅ ThreadLab_Presentation_v2.pptx created'))
    .catch(e => console.error('❌', e));